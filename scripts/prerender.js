import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function runPrerender() {
  console.log("🚀 Starting Amigo Academy SSG Prerendering...");

  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found! Run 'vite build' first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  // Build manifest and fallback asset maps for replacing /src/assets/... with /assets/...
  const manifestPath = path.resolve(distDir, ".vite", "manifest.json");
  const manifestMap = new Map();
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
    for (const [key, val] of Object.entries(manifest)) {
      if (val.file) {
        const bundledPath = "/" + val.file.replace(/^\/+/, "");
        const cleanKey = key.replace(/^\/+/, "");
        const decodedKey = decodeURIComponent(cleanKey);
        const encodedKey = encodeURI(cleanKey);

        manifestMap.set("/" + cleanKey, bundledPath);
        manifestMap.set("/" + decodedKey, bundledPath);
        manifestMap.set("/" + encodedKey, bundledPath);
        manifestMap.set(cleanKey, bundledPath);
        manifestMap.set(decodedKey, bundledPath);
        manifestMap.set(encodedKey, bundledPath);
      }
    }
  }

  const fallbackMap = new Map();
  const assetsDir = path.resolve(distDir, "assets");
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    for (const file of files) {
      const match = file.match(/^(.+)-[A-Za-z0-9_-]+\.([A-Za-z0-9]+)$/);
      if (match) {
        const originalName = match[1] + "." + match[2];
        fallbackMap.set(originalName, "/assets/" + file);
        fallbackMap.set(decodeURIComponent(originalName), "/assets/" + file);
      }
    }
  }

  function fixAssetPaths(htmlStr) {
    let result = htmlStr;
    // Sort manifest keys by length descending to replace longest path strings first (e.g. "/src/assets/..." before "src/assets/...")
    const sortedKeys = Array.from(manifestMap.keys()).sort((a, b) => b.length - a.length);

    for (const srcPath of sortedKeys) {
      const bundledPath = manifestMap.get(srcPath);
      if (result.includes(srcPath)) {
        result = result.split(srcPath).join(bundledPath);
      }
    }

    // Fallback replace any remaining /src/assets/... or /@fs/.../src/assets/... references
    result = result.replace(/(?:src=|href=|url\(['"]?)(?:(?:\/@fs)?\/[^"'\(\)\s]+\/src\/assets\/|\/src\/assets\/)([^"'\(\)\s\?#]+)/g, (fullMatch, rawAssetRelPath) => {
      const assetRelPath = decodeURIComponent(rawAssetRelPath);
      const filename = path.basename(assetRelPath);
      if (fallbackMap.has(filename)) {
        const fixed = fallbackMap.get(filename);
        return fullMatch.replace(/(?:(?:\/@fs)?\/[^"'\(\)\s]+\/src\/assets\/|\/src\/assets\/)[^"'\(\)\s\?#]+/, fixed);
      }
      return fullMatch;
    });

    // Sanitizer fail-safe: Convert any double slashes "//assets/" in src/href/url attributes to single slash "/assets/"
    result = result.replace(/(src=|href=|content=|url\(['"]?)\/{2,}(assets\/)/g, "$1/$2");

    // Sanitizer fail-safe: Convert any file:/// local development paths to production asset URLs
    result = result.replace(/(src=|href=|content=|url\(['"]?)["']?file:\/\/\/[^"'\)\s]+\/([^"'\)\s\?#]+)["']?/g, (fullMatch, attrPrefix, rawFilename) => {
      const filename = path.basename(decodeURIComponent(rawFilename));
      if (fallbackMap.has(filename)) {
        return `${attrPrefix}"${fallbackMap.get(filename)}"`;
      }
      return fullMatch;
    });

    return result;
  }

  // Create a Vite SSR server instance to evaluate src/entry-ssg.tsx
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: "custom",
  });

  try {
    const { getAllRoutePaths, renderRoute } = await vite.ssrLoadModule("/src/entry-ssg.tsx");

    console.log("🔍 Discovering all route paths...");
    const routes = await getAllRoutePaths();
    console.log(`📌 Total routes discovered: ${routes.length}`);

    let count = 0;
    for (const url of routes) {
      try {
        const { html, title, description, canonical } = await renderRoute(url);

        let pageHtml = template;

        // Replace Title
        if (title) {
          pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
        }

        // Replace/Inject Description & Canonical inside <head>
        let headAdditions = "";
        if (description) {
          headAdditions += `\n  <meta name="description" content="${escapeHtml(description)}">`;
        }
        if (canonical) {
          headAdditions += `\n  <link rel="canonical" href="${escapeHtml(canonical)}">`;
        }

        if (headAdditions) {
          pageHtml = pageHtml.replace("</head>", `${headAdditions}\n</head>`);
        }

        // Replace Root Content
        pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

        // Fix all asset paths from dev (/src/assets/...) to production (/assets/...)
        pageHtml = fixAssetPaths(pageHtml);

        // Determine destination file path
        let filePath;
        if (url === "/") {
          filePath = path.resolve(distDir, "index.html");
        } else {
          const routePath = url.startsWith("/") ? url.slice(1) : url;
          filePath = path.resolve(distDir, routePath, "index.html");
        }

        // Ensure directory exists
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, pageHtml, "utf-8");

        count++;
        if (count % 10 === 0 || count === routes.length) {
          console.log(`✅ Pre-rendered ${count}/${routes.length} routes...`);
        }
      } catch (routeErr) {
        console.error(`⚠️ Failed to pre-render route "${url}":`, routeErr);
      }
    }

    console.log(`🎉 SSG Prerendering complete! Successfully pre-rendered ${count} pages into dist/`);
  } finally {
    await vite.close();
  }
}

runPrerender().catch((err) => {
  console.error("💥 Prerender failed:", err);
  process.exit(1);
});


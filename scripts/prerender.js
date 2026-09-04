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

/**
 * Pure JavaScript HTML entity decoder.
 * Replaces document.createElement("textarea") to ensure identical decoding results
 * during SSR (Node.js) and client hydration (browser).
 */
const ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&#038;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&quot;": '"',
  "&#34;": '"',
  "&#039;": "'",
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
  "&#160;": " ",
  "&ndash;": "–",
  "&#8211;": "–",
  "&mdash;": "—",
  "&#8212;": "—",
  "&lsquo;": "‘",
  "&#8216;": "‘",
  "&rsquo;": "’",
  "&#8217;": "’",
  "&ldquo;": "“",
  "&#8220;": "“",
  "&rdquo;": "”",
  "&#8221;": "”",
};

export const decodeHTMLEntities = (text: string): string => {
  if (!text) return "";
  return text.replace(/&(?:[a-z0-9]+|#[0-9]+|#x[0-[#a-f0-9]+);/gi, (match) => {
    if (ENTITY_MAP[match]) {
      return ENTITY_MAP[match];
    }
    // Handle numeric entities &#123; or &#x1a;
    if (match.startsWith("&#x") || match.startsWith("&#X")) {
      const hex = match.slice(3, -1);
      const code = parseInt(hex, 16);
      if (!isNaN(code)) return String.fromCharCode(code);
    } else if (match.startsWith("&#")) {
      const dec = match.slice(2, -1);
      const code = parseInt(dec, 10);
      if (!isNaN(code)) return String.fromCharCode(code);
    }
    return match;
  });
};

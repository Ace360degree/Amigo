import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

const DEFAULT_TITLE = "Amigo Academy - Premier Aviation, Cabin Crew & AI Training Institute";
const DEFAULT_DESCRIPTION = "Join Amigo Academy for top-rated courses in Air Hostess, Cabin Crew Training, Airport Ground Staff, Aviation Hospitality, and AI & Data Science in Mumbai.";
const DEFAULT_KEYWORDS = "Amigo Academy, Cabin Crew Training, Air Hostess Course Mumbai, Airport Ground Staff Training, Aviation Academy Mumbai, AI Data Science Course";
const DEFAULT_OG_IMAGE = "https://staging.amigoacademy.in/assets/img/hero-crew.png";
const SITE_NAME = "Amigo Academy";
const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema
}) => {
  const location = useLocation();
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    document.title = fullTitle;
    const setMetaTag = (selector, attrName, attrValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[name="keywords"]', "name", "keywords", keywords);
    const currentUrl = canonicalUrl || `${window.location.origin}${location.pathname}`;
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:url"]', "property", "og:url", currentUrl);
    setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);
    const existingSchemaScript = document.getElementById("json-ld-schema");
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }
    if (schema) {
      const script = document.createElement("script");
      script.id = "json-ld-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schema, location]);
  return null;
};

export { SEO as S };
//# sourceMappingURL=SEO-DZzBR_S9.mjs.map

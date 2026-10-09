import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/portfolio/automotive-grand-launch-framework",
        "/portfolio/beauty-brand-activation-framework",
        "/portfolio/mall-roadshow-framework",
        "/portfolio/corporate-event-support-framework",
      ],
    },
    sitemap: "https://quarz.example.com/sitemap.xml",
  };
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.URL_PROD! || process.env.URL_NONPROD!}/sitemap.xml`,
  };
}

import { getDomain } from "@/lib/utils";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = getDomain();
  console.log(url);
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}

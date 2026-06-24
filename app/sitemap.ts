import { MetadataRoute } from "next";
import getContentByType from "@/lib/getContentByType";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.URL_PROD! || process.env.URL_NONPROD!;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ueberuns`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Dynamically add individual referenzen pages
  let referenzenPages: MetadataRoute.Sitemap = [];
  try {
    const references: any = await getContentByType("reference");
    if (Array.isArray(references)) {
      referenzenPages = references.map((ref: any) => ({
        url: `${baseUrl}/referenzen/${ref.sys.id}`,
        lastModified: new Date(ref.sys.updatedAt || ref.sys.createdAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("[sitemap] Error fetching references:", error);
  }

  return [...staticPages, ...referenzenPages];
}

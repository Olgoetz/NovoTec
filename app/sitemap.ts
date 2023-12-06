import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.URL_PROD! || process.env.URL_NONPROD!,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.URL_PROD! || process.env.URL_NONPROD!}/ueberuns`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.URL_PROD! || process.env.URL_NONPROD!}/leistungen`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${process.env.URL_PROD! || process.env.URL_NONPROD!}/referenzen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${process.env.URL_PROD! || process.env.URL_NONPROD!}/jobs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.URL_PROD! || process.env.URL_NONPROD!}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}

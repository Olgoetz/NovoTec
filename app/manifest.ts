import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NovoTec - Ausbau- & Sanierungsmanagement",
    short_name: "NovoTec",
    description:
      "NovoTec - Wir sind ein Qualitätsdienstleister aus dem Rheinland im Bereich Ausbau- und Sanierungsmanagement mit über 10 Jahren Erfahrung",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

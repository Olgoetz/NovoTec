import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NovoTec - Ausbau- & Sanierungsmanagement",
    short_name: "NovoTec",
    description:
      "NovoTec - Ausbau- & Sanierungsmanagement im Raum Köln und Umgebung",
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

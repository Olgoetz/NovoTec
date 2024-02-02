import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Referenzen von NovoTec",
  keywords: ["NovoTec", "Referenzen", "Testimoials", "Kunden", "Projekte"],
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LandingLayout;

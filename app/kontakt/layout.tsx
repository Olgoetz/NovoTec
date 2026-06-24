import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktinformation von NovoTec",
  keywords: ["NovoTec", "Kontakt", "Anfrage"],
  alternates: {
    canonical: "/kontakt",
  },
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LandingLayout;

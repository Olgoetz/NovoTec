import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Uns",
  description: "Wer wir sind",
  keywords: ["NovoTec", "Über Uns", "Geschichte"],
  alternates: {
    canonical: "/ueberuns",
  },
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LandingLayout;

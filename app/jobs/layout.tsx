import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Freie Stellen bei NovoTec",
  keywords: ["NovoTec", "Jobs", "freie Stellen"],
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LandingLayout;

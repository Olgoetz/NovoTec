import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projektanfragen",
  description: "Projektanfragen für NovoTec",
  keywords: ["NovoTec", "Projekt", "Anfrage"],
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="projektanfragen" className="py-20 mt-10 md:mt-20 container">
        {children}
      </div>
    </>
  );
};

export default LandingLayout;

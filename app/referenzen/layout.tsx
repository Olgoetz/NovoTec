import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Referenzen von NovoTec",
  keywords: ["NovoTec", "Referenzen", "Testimoials", "Kunden", "Projekte"],
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;

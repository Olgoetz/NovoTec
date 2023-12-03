import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktinformation von NovoTec",
  keywords: ["NovoTec", "Kontakt", "Anfrage"],
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;

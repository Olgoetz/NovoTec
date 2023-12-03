import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Uns",
  description: "Wer wir sind",
  keywords: ["NovoTec", "Über Uns", "Geschichte"],
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;

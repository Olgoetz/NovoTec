import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Freie Stellen bei NovoTec",
  keywords: ["NovoTec", "Jobs", "freie Stellen"],
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;

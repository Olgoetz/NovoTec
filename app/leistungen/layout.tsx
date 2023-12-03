import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Leistungen und Services von NovoTec",
  keywords: [
    "NovoTec",
    "Leistungen",
    "Sanierung",
    "Wassersanierung",
    "Brandsanierung",
    "Innenausbauten",
    "Dachausbauten",
    "Bauelemente",
    "Projetleitung",
    "energieeffiziente Sanierung",
  ],
};

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto h-full w-full">{children}</div>
    </main>
  );
};

export default ServicesLayout;

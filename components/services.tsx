import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

import mainServices from "@/data/mainServices";
import coreCompetencies from "@/data/coreCompetencies";
export const Services = () => {
  const bgColors: any = {
    blue: "border-novo-blue",
    red: "border-novo-red",
    gray: "border-novo-gray",
  };

  const directNovoTecServices = mainServices.filter(
    (task) => task.bgColor === "red"
  );
  directNovoTecServices.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const novothermServices = mainServices.filter(
    (task) => task.bgColor === "blue"
  );
  novothermServices.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const patnerServices = mainServices.filter((task) => task.bgColor === "gray");
  patnerServices.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="w-full mt-10 md:mt-20 py-20">
      <div className="container">
        {/* KERNKOMPETENZEN */}
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Ausbau- und Sanierungsmanagement - unsere Kernkompetenzen
        </h2>
        <div className="grid md:grid-cols-3  items-center gap-8 ">
          {coreCompetencies.map((c) => (
            <div
              key={c.title}
              className="flex items-center justify-center bg-slate-100"
            >
              <div className="group h-60 w-full [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="flex flex-col font-semibold text-lg space-y-2 items-center justify-center h-full">
                    {c.icon && <c.icon className={c.iconStyles2} />}

                    <h3>{c.title}</h3>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-4 text-left text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <ul className="text-sm ">
                        {c.description.map((v, i) => (
                          <li key={`${c.title}+${c.description[i]}`}>{v}</li>
                        ))}
                        {c.title === "Energieeffiziente Sanierung" && (
                          <ul key={`${c.title}+${c.description[0]}`}>
                            <li>
                              • Folgende Leistungen bieten wir in Zusammenarbeit
                              mit unsem eigenen Tochterunternehmen{" "}
                              <a
                                className="text-blue-200"
                                href={c.externalLink}
                              >
                                Novotherm GmbH
                              </a>
                            </li>
                            <li>- Optimierung der Heizungsanlage</li>
                            <li>- Einsatz erneuerbarer Energien</li>
                          </ul>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="grid md:grid-cols-2 items-center gap-8 ">
          {coreCompetencies.map((c) => (
            <Accordion key={c.title} type="single" collapsible>
              <AccordionItem className={cn("rounded-lg")} value={c.title}>
                <AccordionTrigger
                  className={cn("h-[100px] p-4 font-bold justify-between")}
                >
                  {c.title === "Bauelemente" ? (
                    <c.icon
                      width={50}
                      height={50}
                      src="/fenster.png"
                      alt="Fenster Icon"
                      style={{ objectFit: "cover" }}
                      className="h-8 w-8 mr-5"
                    />
                  ) : (
                    <c.icon className="h-8 w-8 mr-5" />
                  )}
                  {c.title}
                </AccordionTrigger>
                <AccordionContent className="p-3">
                  <ul className="space-y-3">
                    {c.description.map((i) => (
                      <li>{i}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div> */}

        {/* HAUPTLEISTUNGEN */}
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mt-20 mb-10 border-b pb-2">
          Ausbau- und Sanierungsmanagement - unsere Hauptleistungen
        </h2>
        <div className="grid md:grid-cols-4 items-center gap-4 ">
          {directNovoTecServices.map((task) => (
            <Accordion
              key={task.title}
              className="cursor-pointer"
              type="single"
              collapsible
            >
              <AccordionItem
                className={cn(
                  "rounded-lg border-4 hover:shadow-xl ",
                  bgColors[task.bgColor]
                )}
                value={task.title}
              >
                <AccordionTrigger
                  className={cn("h-[80px] p-4 font-semibold justify-center")}
                >
                  {task.title}
                </AccordionTrigger>
                <AccordionContent className="md:h-[350px] p-2">
                  <ul className="space-y-3">
                    {task.description.map((i, v) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
          {novothermServices.map((task) => (
            <Accordion
              key={task.title}
              className="cursor-pointer"
              type="single"
              collapsible
            >
              <AccordionItem
                className={cn(
                  "rounded-lg border-4 hover:shadow-xl ",
                  bgColors[task.bgColor]
                )}
                value={task.title}
              >
                <AccordionTrigger
                  className={cn("h-[80px] p-4 font-semibold justify-center")}
                >
                  {task.title}
                </AccordionTrigger>
                <AccordionContent className="md:h-[350px] p-2">
                  <ul className="space-y-3">
                    {task.description.map((i) => (
                      <li key={i[0]}>{i}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
          {patnerServices.map((task) => (
            <Accordion
              key={task.title}
              className="cursor-pointer"
              type="single"
              collapsible
            >
              <AccordionItem
                className={cn(
                  "rounded-lg border-4 hover:shadow-xl ",
                  bgColors[task.bgColor]
                )}
                value={task.title}
              >
                <AccordionTrigger
                  className={cn("h-[80px] p-4 font-semibold justify-center")}
                >
                  {task.title}
                </AccordionTrigger>
                <AccordionContent className="md:h-[350px] p-2">
                  <ul className="space-y-3">
                    {task.description.map((i) => (
                      <li key={i[0]}>{i}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <h3 className="text-xl uppercase font-semibold my-10 text-center border-b pb-2">
          Information
        </h3>
        <div className="grid md:grid-cols-3 w-full text-center md:text-left gap-x-1 space-y-3 md:space-y-0 h-full justify-center mx-auto">
          <div className="flex flex-col md:flex-row  items-center">
            <div className="w-[180px] md:mr-3 h-[40px] mx-auto border-novo-red border-2 rounded-lg" />
            <p className="w-full mt-1 md:mt-0">
              direkte Leistungen durch NovoTec
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center ">
            <div className="w-[180px] md:mr-3 h-[40px] mx-auto border-novo-gray border-2 rounded-lg" />
            <p className="mt-1 md:mt-0">
              indirekte Leistungen durch unsere Partnerunternehmen
            </p>
          </div>
          <div className="flex  flex-col md:flex-row items-center ">
            <div className="w-[180px] md:mr-3 h-[40px] mx-auto border-novo-blue border-2 rounded-lg" />
            <p className="mt-1 md:mt-0">
              indirekte Leistungen durch unser Tochterunternehmen Novotherm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

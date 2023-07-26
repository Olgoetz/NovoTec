import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BuildingIcon,
  PresentationIcon,
  DropletIcon,
  FlameIcon,
} from "lucide-react";
("lucide-react");

import { cn } from "@/lib/utils";
import NovoTec from "./novotec";

export const Services = () => {
  const services = [
    {
      title: "Ausbau",
      icon: BuildingIcon,
      color: "text-green-400",
      bg_color: "",
    },
    {
      title: "Brandsanierung",
      icon: FlameIcon,
      color: "text-red-500",
      bg_color: "",
    },
    {
      title: "Wasserschadensanierung",
      icon: DropletIcon,
      color: "text-blue-400",
      bg_color: "",
    },
    {
      title: "Projektleitung",
      icon: PresentationIcon,
      color: "text-orange-400",
      bg_color: "",
    },
  ];
  return (
    <div id="services" className="w-full py-20">
      <div className="container">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Ausbau- und Sanierungsmanagement - unsere
          Hauptleistungen
        </h2>

        <div className="grid md:grid-cols-2 items-center gap-8 ">
          {services.map((service) => (
            <Accordion key={service.title} type="single" collapsible>
              <AccordionItem
                className={cn("rounded-lg", service.bg_color)}
                value={service.title}
              >
                <AccordionTrigger
                  className={cn(
                    "h-[100px] p-4 font-bold justify-between",
                    service.bg_color
                  )}
                >
                  <service.icon className={cn("h-10 w-10", service.color)} />{" "}
                  {service.title}
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

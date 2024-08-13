import { Competency } from "@/types/competency";
import { Building, Droplet, Flame, Leaf, Presentation } from "lucide-react";
import { MdOutlineWindow } from "react-icons/md";
import { FaSwimmingPool, FaBath } from "react-icons/fa";

const coreCompetencies: Competency[] = [
  {
    title: "Wasserschadensanierung",
    description: [
      "• Einleitung schnellstmöglicher und schadensmindernder Maßnahmen nach einem eingetroffenen Versicherungsschaden",
      "• Sanierung von Brand- & Wasserschäden oder auch Schimmelbefall",
      "• Technische Trocknung",
    ],
    containerStyles: "",
    icon: Droplet,
    iconStyles1: "h-8 w-8",
    iconStyles2: "h-12 w-12",
  },
  {
    title: "Brandschadensanierung",
    description: [
      "• Einleitung schnellstmöglicher und schadensmindernder Maßnahmen nach einem eingetroffenen Versicherungsschaden",
      "• Sanierung von Brandschäden",
    ],
    containerStyles: "",
    icon: Flame,
    iconStyles1: "h-8 w-8 md:w-[180px]",
    iconStyles2: "h-12 w-12 md:w-[180px]",
  },
  {
    title: "Innen- und Dachausbauten",
    description: [
      "• Modernisierung, Sanierung und Revitalisierung von Wohn- und Gewerbeflächen",
      "• Komplette Innenausbauten",
      "• Dachausbau und Dachaufstocken",
      "• Etagenaufstockungen",
      "• Badneubau und -umbau",
    ],
    containerStyles: "",
    icon: Building,
    iconStyles1: "h-8 w-8",
    iconStyles2: "h-12 w-12",
  },
  {
    title: "Energieeffiziente Sanierung",
    description: [
      "• Energieeffiziente Sanierungen nach den Vorgaben eines individuellen Sanierungsfahrplans (iSFP), welcher zuvor durch einen Energieeffizienzberater erstellt wurde",
      "• Wärmedämmung der Außenwände, des Dachs und des Kellerbereichs",
    ],
    externalLink: "https://novotherm-koeln.de/",
    containerStyles: "",
    icon: Leaf,
    iconStyles1: "h-8 w-8",
    iconStyles2: "h-12 w-12",
  },
  {
    title: "Projektleitung",
    description: [
      "• Nahtlose Koordination aller Gewerke",
      "• Offene und transparente Kommunikation",
      "• Erstklassige Qualitätsansprüche",
      "• Versiertes Projektmanagement mit präziser Zeiteinteilung und fortlaufender Überwachung",
      "• Ganzheitliche Herangehensweise zur Minimierung von Schnittstellen",
      "• Individuelle, effiziente und verlässliche Projektdurchführung",
      "• Kontinuierliche Kostenkontrolle",
      "• Ressourcenallokation und umfassende Risikosteuerung",
      "• Ziel: Erfolgreicher Abschluss Ihres Vorhabens",
    ],
    containerStyles: "",
    icon: Presentation,
    iconStyles1: "h-8 w-8 md:w-[180px]",
    iconStyles2: "h-12 w-12 md:w-[180px]",
  },
  {
    title: "Bauelemente",
    description: [
      "• Verkauf und Montage von Bauelementen wie Wohnungs- und Zimmertüren, Fenstern, großflächige Fensterelemente für Treppenhäuser",
    ],
    containerStyles: "",
    icon: MdOutlineWindow,
    iconStyles1: "h-8 w-8 md:w-[180px]",
    iconStyles2: "h-12 w-12 md:w-[180px]",
    //  image: Image,
  },
  {
    title: "Masterbäder",
    description: [
      "• Luxuriöse Gestaltung und individuelles Design",
      "• Maßgeschneiderte Planung und Umsetzung",
      "• Verwendung erstklassiger Materialien",
      "• Integration modernster Technik",
      "• Präzise Handwerkskunst für höchste Qualität",
    ],
    containerStyles: "",
    icon: FaBath,
    iconStyles1: "h-8 w-8 md:w-[180px]",
    iconStyles2: "h-12 w-12 md:w-[180px]",
    //  image: Image,
  },
  {
    title: "Schwimmbeckensanierung",
    description: [
      "• Fachgerechte Fliesenverlegung und -reparatur",
      "• Hochwertige Abdichtungsarbeiten für dauerhafte Dichtigkeit",
      "• Sanierung und Erneuerung von Fliesenbelägen",
      "• Einsatz langlebiger und ästhetischer Fliesenmaterialien",
      "• Präzise Fugenarbeiten und Veredelungstechniken",
    ],
    containerStyles: "",
    icon: FaSwimmingPool,
    iconStyles1: "h-8 w-8 md:w-[180px]",
    iconStyles2: "h-12 w-12 md:w-[180px]",
    //  image: Image,
  },
];

export default coreCompetencies;

import { Service } from "@/types/service";

const mainServices: Service[] = [
  {
    title: "Abbrucharbeiten",
    bgColor: "red",
    description: [
      "• Gezielte Demontage: Fachgerechte Entfernung von Gebäuden und Strukturen für Neuprojekte.",
      "• Sicherheit und Umweltbewusstsein: Sichere Durchführung unter Berücksichtigung von Umweltstandards.",
      "• Effiziente Ressourcennutzung: Nutzung modernster Technik für zügige und nachhaltige Abrissarbeiten.",
    ],
  },
  {
    title: "Putzarbeiten",
    bgColor: "red",
    description: [
      "•  Präzise Verputzarbeiten für makellose und gleichmäßige Oberflächen an Wänden und Decken.",
      "•  Professionelle Verarbeitung von Rissen und Unebenheiten, um eine solide Basis für Farbe oder Tapete zu schaffen.",
      "•  Auswahl an verschiedenen Verputzarten und Texturen, um Ihrem Raum den gewünschten Stil und Charakter zu verleihen.",
    ],
  },
  {
    title: "Wandbelagsarbeiten",
    bgColor: "red",
    description: [
      "Installation von fugenlosen Wandbelägen für ein nahtloses Erscheinungsbild mit u.a.",
      " - Wandpaneele",
      " - Metalische Oberflächen",
    ],
  },
  {
    title: "Elektro",
    bgColor: "gray",
    description: [
      "• Elektroarbeiten und Installationen.",
      "• Leitungsverlegung für elektrische Anlagen.",
      "• Installation und Einrichtung von Verteilern für die Stromversorgung.",
      "• Einrichtung und Anschluss elektrischer Geräte, Sensoren und Bewegungsmelder.",
      "• Installation von Schaltern, Steckdosen und Tastern für eine effiziente Nutzung der elektrischen Installationen.",
      "• Durchführung von Elektroprüfungen und Sicherheitsüberprüfungen.",
    ],
  },
  {
    title: "Bodenbelagsarbeiten",
    bgColor: "red",
    description: [
      "Installation von fugenlosen Bodenbelägen für ein nahtloses Erscheinungsbild mit u.a.",
      " - Linoleum",
      "- Laminat",
      "- Parkett",
      "- Designplanken aus Vinyl / PVC",
      "- Schiffsdiele",
      "- Teppich",
    ],
  },
  {
    title: "Schallschutz",
    bgColor: "red",
    description: [
      "• Schallschutzisolierung: Durchführungen von Installationen von schalldämmenden Materialien in Wänden, Decken und Fußböden, um den Geräuschpegel zu reduzieren.",
    ],
  },
  {
    title: "Wärmedämmung",
    bgColor: "red",
    description: [
      "• Montage von Dämmstoffen: fachgerechte Installation von verschiedenen Dämmstoffen wie beispielsweise Mineralwolle, Steinwolle.",
      "• Isolierung von Gebäudehüllen: Wärmedämmung von Gebäudehüllen wie Dächer, Wände und Böden, um den Energieverbrauch zu reduzieren und den Wohnkomfort zu verbessern.",
    ],
  },
  {
    title: "Heizung und Sanitär",
    bgColor: "blue",
    description: [
      "• Beratung und Planung des richtigen Heizsystems für Ihre Immobilie, wie Gasheizung, Wärmepumpen oder Pelletheizungen.",
      "• Professionelle Badgestaltung mit 3D-Visualisierung für eine individuelle Planung.",
      "• Sanitäranlagen nach Ihren Wünschen installieren.",
      "• Installation von Fußbodenheizungen.",
      "• Badsanierung – modern, funktional und/oder barrierefrei.",
      "• Sanierung der Hausinstallationen, um eine effiziente und sichere Versorgung zu gewährleisten.",
      "• Strangsanierung für eine nachhaltige Verbesserung der Trinkwasser- und Heizungsanlagen.",
    ],
  },
  {
    title: "Estricharbeiten",
    bgColor: "gray",
    description: [
      "• Durchführung von Estricharbeiten, einschließlich Fließestrich, Trockenestrich und Baustellenestrich.",
      "• Professionelle Estricharbeiten schaffen eine stabile Basis für Bodenbeläge wie Fliesen, Laminat oder Parkett.",
      "• Präzise Nivellierung von Böden, um Unebenheiten auszugleichen und eine gleichmäßige Oberfläche zu gewährleisten.",
      "• Verschiedene Estricharten für spezifische Anforderungen, von Wohnräumen bis zu gewerblichen Flächen, für optimale Haltbarkeit und Performance wie z.B. Zement-, Fließ-, Trockenestrich o.a.",
    ],
  },
  {
    title: "Fliesenlegerarbeiten",
    bgColor: "red",
    description: [
      "• Professionelle Ausführung von Fliesenarbeiten in vielfältigen Stile und Materialien",
      "• Präzise Ausbesserungsarbeiten an bestehenden Fliesen, um Beschädigungen zu reparieren oder ein einheitliches Erscheinungsbild wiederherzustellen",
      "• Erfahrene Wiederbeschaffung alter Fliesen, um vorhandene Flächen zu ergänzen oder zu erweitern",
      "• Spezialisiert auf die Verlegung von Fliesen im Großformat für eine moderne und großzügige Raumgestaltung",
    ],
  },
  {
    title: "Trockenbau",
    bgColor: "red",
    description: [
      "• Leichte Trennwände mit Metallunterkonstruktion.",
      "• Unterdecken, abgehängte Decken.",
      "• Schalldämmung für eine verbesserte Akustik.",
      "• Vorsatzschalen zur Lösung von Unterputz-Installationen wie WC's oder Waschtische.",
    ],
  },
  {
    title: "Asbestsanierung",
    bgColor: "gray",
    description: [
      "• Schonende und ungefährliche Entfernung von Asbesthaltigen Baumaterialien nach TRGS-Vorgaben.",
      "• Der ehemalig sehr gefragte Baustoff darf heutzutage nicht mehr verbaut werden.",
      "• Wird er jedoch entdeckt ist der Bauherr dazu verpflichtet diesen von einem Fachunternehmen entfernen zu lassen.",
    ],
  },

  {
    title: "Malerarbeiten",
    bgColor: "red",
    description: [
      "• Tapezieren mit einer Vielzahl von Tapetenarten (Malervlies, Raufaser, Mustertapeten usw.)",
      "• Durchführung von Außen- und Innenanstrichen für verschiedene Oberflächen.",
      "• Lackieren und Streichen von Fenstern, Türen, Geländern und anderen Oberflächen.",
      "• Ausführung von Spachtelarbeiten mit verschiedenen Qualitätsstufen (Q1 bis Q4).",
    ],
  },
  {
    title: "Trocknungen",
    bgColor: "red",
    description: [
      "• Effiziente Trocknungslösungen, um Feuchtigkeit nach Wasser- oder Brandschäden zu entfernen.",
      "• Verhinderung der Bildung von Schimmel und strukturellen Schäden durch professionelle Trocknungsverfahren.",
      "• Fachkundige Anwendung von Techniken und Ausrüstung, um eine rasche und sichere Wiederherstellung betroffener Bereiche zu gewährleisten.",
    ],
  },

  {
    title: "Brandschutz",
    bgColor: "gray",
    description: [
      "• Brandschutzisolierung: Durchführung von Brandschutzisolierungen, um die Ausbreitung von Feuer und Rauch in Gebäuden zu verhindern.",
      "• Das beinhaltet die Verwendung von speziellen Materialien und Techniken, um feuerbeständige Barrieren zu schaffen.	",
    ],
  },
  {
    title: "Klimaanlagen",
    bgColor: "gray",
    description: [
      "• Effiziente Installation: Fachgerechte Installation von Klimaanlagen, um optimalen Komfort und Energieeffizienz zu gewährleisten.",
    ],
  },
  {
    title: "Maurerarbeiten",
    bgColor: "red",
    description: [
      "• Maßgeschneiderte Maurerarbeiten nach Kundenwunsch.",
      "• Errichtung von Innenwänden und Sichtmauerwerk.",
      "• Großflächige und kleinflächige Ausbesserungen oder Sanierungen von bestehenden Mauerwerken.",
    ],
  },
  {
    title: "Türen und Fenster",
    bgColor: "red",
    description: [
      "• Sorgfältige Messung der Öffnungen, um eine perfekte Passform von Türen und Fenstern zu gewährleisten.",
      "• Professionelle Montage, um eine korrekte Ausrichtung, problemloses Öffnen und Schließen sowie effiziente Dichtung zu garantieren.",
      "• Verwendung von Dichtungen und Isolationsmaterialien, um Zugluft zu minimieren und die Energieeffizienz des Gebäudes zu steigern.",
    ],
  },

  {
    title: "Dacharbeiten",
    bgColor: "gray",
    description: [
      "• Individuelle Konstruktion, Fertigung und Montage von Dachstühlen.",
      "• Fachgerechte Installation und Reparatur von Dächern für optimale Leistung und Langlebigkeit.",
      "• Expertise im Umgang mit verschiedenen Dachmaterialien wie Ziegel, Schiefer, Metall und mehr, um die gewünschte Ästhetik und Funktionalität zu erreichen.",
    ],
  },

  {
    title: "Solaranlagen",
    bgColor: "gray",
    description: [
      "• Installation von Solaranlagen, um saubere und erneuerbare Energie aus Sonnenlicht zu gewinnen.",
      "• Maßgeschneiderte Solarlösungen für Wohn- und Geschäftsgebäude, die Ihren Energiebedarf und architektonischen Kontext berücksichtigen.",
    ],
  },
];

export default mainServices;

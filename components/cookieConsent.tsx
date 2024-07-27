"use client";

import { useState } from "react";

import {
  CookieConsentBanner,
  triggerCookieConsentBanner,
} from "@porscheofficial/cookie-consent-banner-react";

const initConsent = ({ acceptedCategories }: { acceptedCategories: any }) => {
  // -------------------------------------------------------------------------
  // Error Tracking Service
  // Analytics
  // -------------------------------------------------------------------------
  console.log(acceptedCategories);
};

const CookieConsent = () => {
  const [acceptedCategories, setAcceptedCategories] = useState([]);

  return (
    <div className="">
      <CookieConsentBanner
        className="bg-white text-green"
        handlePreferencesUpdated={initConsent}
        handlePreferencesRestored={initConsent}
        btnLabelAcceptAndContinue="Zustimmen und fortfahren"
        btnLabelSelectAllAndContinue="Alle auswählen und fortfahren"
        btnLabelOnlyEssentialAndContinue="Nur mit technischen notwendigen Cookies fortfahren"
        btnLabelPersistSelectionAndContinue="Auswahl speichern und fortfahren"
        contentSettingsDescription="Sie können entscheiden, welche Cookies verwendet werden, indem Sie die entsprechenden Optionen unten auswählen. Bitte beachten Sie, dass Ihre Auswahl die Funktionalität des Dienstes beeinträchtigen kann."
        availableCategories={[
          {
            description:
              "Ermöglicht Ihnen die Navigation und die Nutzung der Grundfunktionen sowie das Speichern von Einstellungen.",
            key: "technically_required",
            label: "Technisch notwendige Cookies",
            isMandatory: true,
          },
          //   {
          //     description:
          //       "Enable us to determine how visitors interact with our service in order to improve the user experience.",
          //     key: "analytics",
          //     label: "Analysis cookies",
          //   },
          //   {
          //     description:
          //       "Enable us to offer and evaluate relevant content and interest-based advertising.",
          //     key: "marketing",
          //     label: "Marketing cookies",
          //   },
        ]}
      >
        Wir verwenden Cookies und ähnliche Technologien, um bestimmte Funktionen
        bereitzustellen, die Benutzerfreundlichkeit zu verbessern und Inhalte zu
        liefern, die für Ihre Interessen. Je nach Zweck können neben technisch
        notwendigen Cookies auch Analyse- und Marketing-Cookies zusätzlich zu
        den technisch notwendigen Cookies verwendet werden. Durch Klicken auf
        &quot;Zustimmen und fortfahren&quot;, erklären Sie Ihr Einverständnis
        mit der Verwendung von der vorgenannten Cookies.{" "}
        <button
          className="text-novo-red"
          onClick={() => {
            triggerCookieConsentBanner({ showDetails: true });
          }}
          onKeyPress={() => {
            triggerCookieConsentBanner({ showDetails: true });
          }}
          type="button"
        >
          Hier
        </button>{" "}
        können Sie detaillierte Einstellungen vornehmen oder Ihre Einwilligung
        (ggf. teilweise) mit Wirkung für die Zukunft widerrufen. Weitere
        Informationen finden Sie finden Sie in unserem{" "}
        <a className="text-novo-red" href="/datenschutz">
          Datenschutzerklärung
        </a>
        .
      </CookieConsentBanner>
    </div>
  );
};

export default CookieConsent;

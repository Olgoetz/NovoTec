"use client";

import { useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentComponent = () => {
  const [acceptedCategories, setAcceptedCategories] = useState<string[]>([]);

  const handleAccept = () => {
    // Add logic for handling acceptance of all cookies
    console.log("All cookies accepted.");
    setAcceptedCategories(["technically_required", "analytics", "marketing"]);
  };

  const handleDecline = () => {
    // Add logic for handling only essential cookies
    console.log("Only essential cookies accepted.");
    setAcceptedCategories(["technically_required"]);
  };

  const handlePreferences = () => {
    // Add logic for showing preferences modal (if needed)
    console.log("Show cookie preferences.");
  };

  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Zustimmen und fortfahren"
        declineButtonText="Nur mit technisch notwendigen Cookies forfahren"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        buttonStyle={{
          backgroundColor: "#D01516", // Green color for primary button
          color: "#fff",
          borderRadius: "4px",
          fontWeight: "bold",

          padding: "10px 20px",
        }}
        declineButtonStyle={{
          backgroundColor: "transparent", // Red color for decline button
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "4px",
          borderColor: "white",
          border: "1px solid",
          padding: "10px 20px",
        }}
        style={{
          background: "black",
          color: "#fff", // Dark gray for text
          borderTop: "1px solid #E5E7EB",
        }}
        contentStyle={{
          display: "flex",
          flex: "none",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "center", // Center the text and buttons vertically
          margin: 0, // Remove any default margin
          padding: "10px", // Optional: add padding to the content if needed
        }}
        contentClasses=""
        buttonWrapperClasses="flex flex-row items-start gap-4 justify-start"
        containerClasses="flex flex-col p-4"
        //contentClasses="text-center"
      >
        <div className="p-4">
          Wir verwenden Cookies und ähnliche Technologien, um bestimmte
          Funktionen bereitzustellen, die Benutzerfreundlichkeit zu verbessern
          und Inhalte zu liefern, die für Ihre Interessen relevant sind. Je nach
          Zweck können neben technisch notwendigen Cookies auch Analyse- und
          Marketing-Cookies verwendet werden. Durch Klicken auf &quot; Zustimmen
          und fortfahren &quot; erklären Sie Ihr Einverständnis mit der
          Verwendung der vorgenannten Cookies. Weitere Informationen finden Sie
          in unserer{" "}
          <a className="text-novo-red underline" href="/datenschutz">
            Datenschutzerklärung
          </a>
          .
        </div>
      </CookieConsent>
    </div>
  );
};

export default CookieConsentComponent;

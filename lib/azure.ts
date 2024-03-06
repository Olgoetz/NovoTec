import { ConfidentialClientApplication } from "@azure/msal-node";

export const msalConfig = {
  auth: {
    authority:
      "https://login.microsoftonline.com/3f3115e8-d1f7-47ea-b311-b190f1203cbc",
    clientId: "59315f6c-831e-4c09-a2b0-542bba1e9964",

    clientSecret: "VXP8Q~Vt5LDFgtcgL5QigV8uZbV7LqefuKPzhcaB",
  },
};

export const msalClient = new ConfidentialClientApplication(msalConfig);

// 591e88be-52a5-4ec1-a4ea-9e7b8ff3c4d0
// VXP8Q~Vt5LDFgtcgL5QigV8uZbV7LqefuKPzhcaB

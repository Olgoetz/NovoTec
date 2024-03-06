"use server";
import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import {
  TokenCredentialAuthenticationProvider,
  TokenCredentialAuthenticationProviderOptions,
} from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

import { msalClient, msalConfig } from "@/lib/azure";

// auth: {
//     authority:
//       "https://login.microsoftonline.com/3f3115e8-d1f7-47ea-b311-b190f1203cbc",
//     clientId: "59315f6c-831e-4c09-a2b0-542bba1e9964",

//     clientSecret: "VXP8Q~Vt5LDFgtcgL5QigV8uZbV7LqefuKPzhcaB",
const getAccessToken = async () => {
  try {
    const authResult = await msalClient.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });
    console.log(authResult);
    const accessToken = authResult?.accessToken;
    return accessToken;
  } catch (error) {
    console.error("Failed to acquire token:", error);
  }
};
// Create an instance of the TokenCredential class that is imported
const tokenCredential = new ClientSecretCredential(
  "3f3115e8-d1f7-47ea-b311-b190f1203cbc",
  "59315f6c-831e-4c09-a2b0-542bba1e9964",
  "VXP8Q~Vt5LDFgtcgL5QigV8uZbV7LqefuKPzhcaB"
);

tokenCredential
  .getToken("https://graph.microsoft.com/.default")
  .then((tokenResponse) => {
    console.log("Access token:", tokenResponse.token);
    console.log("Token expires at:", tokenResponse.expiresOnTimestamp);
  })
  .catch((error) => {
    console.error("Failed to get token:", error);
  });
const authProvider = new TokenCredentialAuthenticationProvider(
  tokenCredential,
  { scopes: ["https://graph.microsoft.com/.default"] }
);

const client = Client.initWithMiddleware({
  debugLogging: true,
  authProvider,
});

export const fetchOutlookEvents = async () => {
  //   const client = Client.init({
  //     authProvider: (done) => {
  //       done(null, msalConfig.auth);
  //     },
  //   });
  try {
    const events = await client
      .api("/users/84c2fdbe-c42d-455a-a1ec-45115387217f/calendar")
      .get();
    console.log(events.value);
  } catch (error) {
    console.log(error);
  }
};

// export const fetchOutlookEvents = async () => {
//   const accessToken = await getAccessToken();
//   console.log(accessToken);
//   try {
//     const response = await fetch(
//       "https://graph.microsoft.com/v1.0/$metadata#users('goetz.oliver%40outlook.com')/events",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     console.log(response);
//     if (response.ok) {
//       try {
//         const data = await response.json();
//       } catch (error) {
//         console.error("Failed to parse response:", error.message);
//       }
//     } else {
//       throw new Error(`Failed to fetch Outlook events: ${response.statusText}`);
//     }
//   } catch (error) {
//     console.error("Error fetching Outlook events:", error);
//   }
// };

// let accessToken;
// try {
//   const authResult = await msalClient.acquireTokenByClientCredential({
//     scopes: ["https://graph.microsoft.com/.default"],
//   });

//   accessToken = authResult.accessToken;
// } catch (error) {
//   console.error("Failed to acquire token:", error);
//   throw error; // You might handle this error differently in your application
// }
// try {
//   const response = await fetch(
//     "https://graph.microsoft.com/v1.0/me/events",
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   if (response.ok) {
//     const data = await response.json();
//     return data.value; // Assuming events are in the 'value' property
//   } else {
//     throw new Error(
//       `Failed to fetch Outlook events: ${response.statusText}`
//     );
//   }
// } catch (error) {
//   console.error("Error fetching Outlook events:", error);
//   throw error; // You might handle this error differently in your application
// }

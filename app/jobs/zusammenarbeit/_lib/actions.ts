"use server";
import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import {
  TokenCredentialAuthenticationProvider,
  TokenCredentialAuthenticationProviderOptions,
} from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

import * as client from "@azure/msal-node";
import axios from "axios";

const msalConfig = {
  auth: {
    authority:
      "https://login.microsoftonline.com/3f3115e8-d1f7-47ea-b311-b190f1203cbc",
    clientId: "59315f6c-831e-4c09-a2b0-542bba1e9964",

    clientSecret: "VXP8Q~Vt5LDFgtcgL5QigV8uZbV7LqefuKPzhcaB",
  },
};

// const getAccessToken = async () => {
//   try {
//     const authResult = await cleint.acquireTokenByClientCredential({
//       scopes: ["https://graph.microsoft.com/.default"],
//     });
//     console.log(authResult);
//     const accessToken = authResult?.accessToken;
//     return accessToken;
//   } catch (error) {
//     console.error("Failed to acquire token:", error);
//   }
// };
// Create an instance of the TokenCredential class that is imported
// const tokenCredential = new ClientSecretCredential(
//   "3f3115e8-d1f7-47ea-b311-b190f1203cbc",
//   "59315f6c-831e-4c09-a2b0-542bba1e9964",
//   "VXP8Q~Vt5LDFgtcgL5QigV8uZbV7LqefuKPzhcaB"
// );

// const authProvider = new TokenCredentialAuthenticationProvider(
//   tokenCredential,
//   { scopes: ["https://graph.microsoft.com/.default"] }
// );

const tokenRequest = {
  scopes: ["https://graph.microsoft.com/.default"],
};
const cca = new client.ConfidentialClientApplication(msalConfig);
//const tokenResponse =  cca.acquireTokenByClientCredential(tokenRequest);
// const client = Client.initWithMiddleware({
//   debugLogging: true,
//   authProvider,
// });

async function getToken(tokenRequest: any) {
  return await cca.acquireTokenByClientCredential(tokenRequest);
}

export const fetchOutlookEvents = async () => {
  try {
    // const events = await client
    //   .api("/users/84c2fdbe-c42d-455a-a1ec-45115387217f/calendar")
    //   .get();
    const token = await getToken(tokenRequest);

    const options = {
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
      },
    };
    const events = await axios.get(
      "https://graph.microsoft.com/v1.0/users/84c2fdbe-c42d-455a-a1ec-45115387217f/calendar",
      options
    );
    return events;
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

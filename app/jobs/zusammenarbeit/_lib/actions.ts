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
    authority: process.env.AZ_AUTHORITY as string,
    clientId: process.env.AZ_CLIENT_ID as string,
    clientSecret: process.env.AZ_CLIENT_SECRET as string,
  },
};

const tokenRequest = {
  scopes: ["https://graph.microsoft.com/.default"],
};
const cca = new client.ConfidentialClientApplication(msalConfig);

async function getToken(tokenRequest: any) {
  return await cca.acquireTokenByClientCredential(tokenRequest);
}

export const fetchOutlookEvents = async () => {
  try {
    const token = await getToken(tokenRequest);
    console.log(token?.accessToken);
    const options = {
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
      },
    };
    const events = await axios.get(
      // "https://graph.microsoft.com/v1.0/users/goetz.oliver_outlook.com/calendars",
      //"https://graph.microsoft.com/v1.0/users",
      "https://graph.microsoft.com/v1.0/users/goetz.oliver_outlook.com/calendars",
      options
    );
    console.log(events.data);
    return events.data;
  } catch (error: any) {
    console.log(error.response.data);
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

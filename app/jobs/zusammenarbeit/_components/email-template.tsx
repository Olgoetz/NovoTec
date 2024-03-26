import * as React from "react";

import { Html, Body, Container, Tailwind } from "@react-email/components";
import { TEmailFormSchema } from "../_lib/validations";

export const EmailTemplate = (body: TEmailFormSchema) => {
  const {
    step1,
    step2,
    step3_location,
    step3_zipCode,
    step4,
    step5,
    step6,
    step7_email,
    step7_firstName,
    step7_lastName,
    step7_phone,
    step8,
    step9,
  } = body;
  const fileUrls = step8 ? step8.split(",") : "";
  return (
    <Html>
      <Tailwind>
        <Body className="bg-wite my-auto mx-auto">
          <Container className="font-sans border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[500px]">
            <h1 className="text-2xl">Liebes NovoTec Team,</h1>
            <p className="mt-12">
              Eine neue Anfrage zur Zusammenarbeit ist eben eingegangen:
            </p>

            <div className="mt-6">
              <p className="text-lg font-semibold">Absender</p>
              <p>
                {step7_firstName} {step7_lastName}
              </p>
              <p className="text-lg font-semibold">Email</p>
              <p>{step7_email}</p>
              <p className="text-lg font-semibold">Mobilfunknummer</p>
              <p>{step7_phone}</p>
              <p className="text-lg font-semibold">Gewerke</p>
              <p>{step1}</p>

              <p className="text-lg font-semibold">Tätigkeitsbeginn</p>
              <p>{step2}</p>
              <p className="text-lg font-semibold">Standort</p>
              <p>
                {step3_zipCode}, {step3_location}
              </p>

              <p className="text-lg font-semibold">Einsatzgebiet</p>
              <p>{step4} km</p>

              <p className="text-lg font-semibold">Teamstärke</p>
              <p>{step5}</p>

              <p className="text-lg font-semibold">Stundensatz</p>
              <p>{step6} €</p>

              <p className="text-lg font-semibold">Fotos</p>
              {fileUrls != ""
                ? fileUrls?.map((fileUrl: string) => (
                    <p key={fileUrl}>- {fileUrl}</p>
                  ))
                : "keine Fotos hochgeladen"}
              <p className="text-sm mt-4">
                Info: Die Dateien werden nach 4 Wochen gelöscht.
              </p>

              <p className="text-lg font-semibold">Wunschtermin</p>
              <p>{step9}</p>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

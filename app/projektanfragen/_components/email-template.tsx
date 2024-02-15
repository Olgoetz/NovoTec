import * as React from "react";

import { Html, Body, Container, Tailwind } from "@react-email/components";
import { TEmailFormSchema, TFormSchema } from "../_lib/actions";

export const EmailTemplate = (body: TEmailFormSchema) => {
  const { name, email, phone, description, fileUrlsString } = body;
  const fileUrls = fileUrlsString.split(",");
  return (
    <Html>
      <Tailwind>
        <Body className="bg-wite my-auto mx-auto">
          <Container className="font-sans border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[500px]">
            <h1 className="text-2xl">Liebes NovoTec Team,</h1>
            <p className="mt-12">Eine neue Bewerbung ist eben eingegangen:</p>

            <div className="mt-6">
              <p className="text-lg font-semibold">Absender</p>
              <p>{name ? name : "nicht gesetzt"}</p>
              <p className="text-lg font-semibold">Email</p>
              <p>{email}</p>
              <p className="text-lg font-semibold">Mobilfunknummer</p>
              <p>{phone}</p>
              <p className="text-lg font-semibold">Projektbeschreibung</p>
              <p>{description}</p>
              <p className="text-lg font-semibold">Anhänge</p>

              {fileUrls?.map((fileUrl) => <p key={fileUrl}>- {fileUrl}</p>)}
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

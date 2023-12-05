import * as React from "react";

import { Html, Body, Container, Tailwind } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-wite my-auto mx-auto">
          <Container className="font-sans border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <h1 className="text-2xl">Liebes NovoTec Team,</h1>
            <p className="mt-12">Eine Nachricht ist eben eingegangen:</p>

            <div className="mt-6">
              <p className="text-lg font-semibold">Absender</p>
              <p>{name ? name : "nicht gesetzt"}</p>
              <p className="text-lg font-semibold">Email</p>
              <p>{email}</p>
              <p className="text-lg font-semibold">Nachricht</p>
              <p className="text-sm">{message}</p>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

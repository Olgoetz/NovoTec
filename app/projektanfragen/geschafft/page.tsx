import { CircleCheckBigIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <CircleCheckBigIcon className="w-20 h-20 text-novo-red" />

      <h1 className="text-4xl font-bold">Vielen Dank für Ihre Anfrage!</h1>
      <p>Wir melden uns schnellstmöglich bei Ihnen.</p>
    </div>
  );
};

export default Page;

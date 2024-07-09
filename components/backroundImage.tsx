import React from "react";
import Image from "next/image";

import Hero from "@/public/hero.jpg";

function BackgroundImage() {
  return (
    <div className="relative overflow-hidden w-full h-screen">
      <Image
        src={Hero}
        alt="NovoTec Logo"
        fill
        className="absolute object-cover w-auto h-auto min-w-full min-h-full"
      />
    </div>
  );
}

export default BackgroundImage;

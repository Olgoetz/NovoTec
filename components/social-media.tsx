import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Styles {
  classes?: string;
}

const SocialMedia = ({ classes }: Styles) => {
  return (
    <>
      <div className={cn("flex space-x-4", classes)}>
        <Link
          href="https://www.instagram.com/novotec_koeln/?hl=de"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href="https://www.facebook.com/novoteckoeln/?locale=de_DE"
          target="_blank"
        >
          <Facebook />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;

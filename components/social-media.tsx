import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Styles {
  styles?: string;
}

const SocialMedia = ({ styles }: Styles) => {
  return (
    <>
      <div className={cn("flex items space-x-4", styles)}>
        <Link href="/">
          <Instagram />
        </Link>
        <Link href="/">
          <Facebook />
        </Link>
        <Link href="/">
          <Linkedin />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;

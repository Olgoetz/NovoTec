import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDomain() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    return process.env.URL_PROD;
  } else {
    return process.env.URL_NONPROD;
  }
}

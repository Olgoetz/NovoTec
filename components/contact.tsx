"use client";

import DotLoader from "react-spinners/DotLoader";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import GoogleMaps from "./googleMaps";
import Link from "next/link";
import pino from "../logger";
import type { Logger } from "pino";
import { sendMail } from "@/app/api/email/actions";

const logger: Logger = pino;
const formSchema = z.object({
  name: z.string(),
  text: z.string().min(1, { message: "Benötigt" }),
  email: z
    .string()
    .min(1, { message: "Benötigt" })
    .email({ message: "Bitte geben Sie eine gültige Email-Adresse ein!" }),
});

export default function Contact() {
  const [hasErrors, setHasErrors] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      text: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { name, email, text } = values;
      const payload = {
        name,
        email,
        message: text,
      };
      await sendMail(payload);
      form.reset();
    } catch (err) {
      console.error(err);
      setHasErrors(true);
    }
  }

  return (
    <div id="kontakt" className="py-20 mt-10 md:mt-20">
      <div className="container ">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          So erreichen Sie uns
        </h2>

        <div className="grid md:grid-cols-2 gap-x-6  mx-auto">
          {/* <div className="relative">
            <Image fill src="/contact.jpg" alt="contanct" />
          </div> */}
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold justify-left w-full mb-10">
              Kontakt
            </h3>
            <ul className="flex flex-col w-full space-y-10 text-sm">
              <li className="flex items-center">
                <Phone size={30} className="mr-5" />
                0221 292 4250
              </li>
              <li className="flex items-center">
                <Mail size={30} className="mr-5" />
                <a href="mailto:info@novotec-koeln.de">info@novotec-koeln.de</a>
              </li>
              <li className="flex items-center">
                <MapPin size={30} className="mr-5" />
                NovoTec GmbH & Co. KG, Walter-Meckauer-Str. 33a, 51067 Köln
              </li>
            </ul>
          </div>
          {/* <div className="w-full mt-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Adresse</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="meineAdresse@beispiel.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachricht</FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-white"
                          placeholder="Ihre Nachricht"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {!form.formState.isSubmitting ? (
                  <Button
                    className="bg-white hover:bg-secondary-foreground hover:text-white rounded-sm border text-black"
                    type="submit"
                  >
                    Abschicken
                  </Button>
                ) : (
                  <DotLoader size={20} />
                )}
                {form.formState.isSubmitSuccessful &&
                  form.formState.isSubmitted &&
                  !hasErrors && (
                    <p className="text-green-600">
                      Nachricht erfolgreich verschickt!
                    </p>
                  )}
                {(!form.formState.isSubmitSuccessful &&
                  form.formState.isSubmitted) ||
                  (hasErrors && (
                    <p className="text-red-600">
                      Nachricht verschicken fehlgeschlagen!
                    </p>
                  ))}
              </form>
            </Form>
            <div className="text-sm mt-4">
              <p>
                Wir verwenden Ihre Angaben zur Beantwortung Ihrer Anfrage.
                Weitere Informationen finden Sie in unseren{" "}
                <Link
                  className="text-novo-red"
                  href="/datenschutz"
                  target="_blank"
                >
                  Datenschutzhinweisen.
                </Link>
              </p>
            </div>
          </div> */}
        </div>
        <div className="mt-20">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
}

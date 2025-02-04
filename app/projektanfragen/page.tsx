"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormButton from "@/components/form-button";
import toast from "react-hot-toast";
import { useAction } from "next-safe-action/hooks";
import ToastMessage from "@/components/toast-message";
import { FormSchema, TFormSchema } from "./_lib/validation";
import { submitSafeInquiry } from "./_lib/actions";
import { FileState, MultiFileDropzone } from "@/components/multi-file-dropzone";
import { EdgeStoreApiClientError } from "@edgestore/react/shared";
import { formatFileSize } from "@edgestore/react/utils";
import { useEffect, useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import axios from "axios";
import Link from "next/link";
import { Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

  const [isAccepted, setIsAccepted] = useState(false);
  const [uploadRes, setUploadRes] = useState<
    {
      url: string;
      filename: string;
    }[]
  >([]);
  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",
      zipCode: "",
      location: "",
      fileUrls: [],
    },
  });

  const fetchCityByZipCode = useDebouncedCallback(async (zipCode: string) => {
    if (!zipCode.trim()) return;
    try {
      const response = await axios.get(
        `https://api.zippopotam.us/de/${zipCode.trim()}`
      );
      const data = response.data;
      const city = data.places[0]["place name"];

      //  setCity(city); // Update the city state
      form.setValue("location", city); // Update the location form field (optional
      form.clearErrors("zipCode"); // Clear the error if the request is successful
      return city;
    } catch (error) {
      form.setError("zipCode", { message: "Ungültige PLZ" });
      form.setValue("location", ""); // Update the location form field (optional

      //   setCity(''); // Clear the city state in case of an error
    }
  }, 1000);

  //   function updateFormFileProgress(
  //     key: string,
  //     progress: FileState["progress"]
  //   ) {
  //     form.setValue("fileStates", (formFileStates) => {
  //       const newFileStates = structuredClone(formFileStates);
  //       const fileState = newFileStates.find(
  //         (fileState) => fileState.key === key
  //       );
  //       if (fileState) {
  //         fileState.progress = progress;
  //       }
  //       return newFileStates;
  //     });
  //   }

  // useEffect(() => {
  //   if (form.formState.errors) {
  //     // do the your logic here
  //     console.log("formState", form.formState.errors);
  //   }
  // }, [form.formState]); // ✅

  const { execute, result, status } = useAction(submitSafeInquiry, {
    onSuccess() {
      toast.success("Nachricht erfolgreich verschickt!", {
        duration: 3000,
        position: "bottom-right",
      });
      form.reset();
      setFileStates([]);
      setUploadRes([]);
    },
    onError(data) {
      toast.error("Fehlgeschlagen!", {
        position: "bottom-right",
      });
    },
  });

  function onSubmit(values: TFormSchema) {
    const payload = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      description: values.description,
      location: values.location,
      zipCode: values.zipCode,
    };
    execute({ ...payload, fileUrlsString: values.fileUrls.toString() });
  }

  return (
    <div>
      <h2 className="text-2xl uppercase text-center md:text-left mt-10 md:mt-20 font-semibold mb-10 border-b pb-2">
        Starten sie ihre Projektanfrage
      </h2>
      <div className="max-w-xl mx-auto">
        <h3 className="pb-4 font-semibold">Persönliche Daten</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobilfunknummer*</FormLabel>
                  <FormControl>
                    <Input placeholder="Mobilfunknummer" {...field} />
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
                  <FormLabel>Email Adresse*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="meineEmailAdresse@beispiel.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="font-semibold">Projektinformationen</h3>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beschreibung*</FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PLZ*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="12345"
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e); // Update the form field value

                          fetchCityByZipCode(e.target.value); // Fetch city based on ZIP code
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Standort</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        {...field}
                        placeholder="wird automatisch gesetzt"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="fileUrls"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fotos/Dokumente hochladen**</FormLabel>
                  <FormControl>
                    <MultiFileDropzone
                      {...form.register("fileUrls")}
                      className="w-full"
                      value={fileStates}
                      dropzoneOptions={{
                        maxFiles: 5,
                        maxSize: 3 * 1024 * 1024,
                      }}
                      //value={field.value}
                      //   onChange={field.onChange}
                      onChange={(files) => {
                        setFileStates(files);
                      }}
                      onFilesAdded={async (addedFiles) => {
                        setFileStates([...fileStates, ...addedFiles]);
                      }}
                    />
                  </FormControl>

                  <Button
                    className="mt-2 bg-novo-red hover:bg-novo-red/50 text-white"
                    onClick={async () => {
                      await Promise.all(
                        fileStates.map(async (fileState) => {
                          try {
                            if (fileState.progress !== "PENDING") return;
                            const res = await edgestore.publicFiles.upload({
                              file: fileState.file,
                              onProgressChange: async (progress) => {
                                updateFileProgress(fileState.key, progress);
                                if (progress === 100) {
                                  // wait 1 second to set it to complete
                                  // so that the user can see the progress bar
                                  await new Promise((resolve) =>
                                    setTimeout(resolve, 1000)
                                  );
                                  updateFileProgress(fileState.key, "COMPLETE");
                                }
                              },
                            });
                            setUploadRes((uploadRes) => [
                              ...uploadRes,
                              {
                                url: res.url,
                                filename: fileState.file.name,
                              },
                            ]);
                            const currentFileUrls = form.getValues("fileUrls");
                            const newFileUrls = [...currentFileUrls, res.url];
                            form.setValue("fileUrls", newFileUrls, {
                              shouldValidate: true,
                              shouldDirty: true,
                            });
                            console.log("fileUrls", newFileUrls);
                          } catch (error) {
                            updateFileProgress(fileState.key, "ERROR");
                            // All errors are typed and you will get intellisense for them
                            if (error instanceof EdgeStoreApiClientError) {
                              // if it fails due to the `maxSize` set in the router config
                              if (error.data.code === "FILE_TOO_LARGE") {
                                alert(
                                  `Datei zu groß. Sie darf maximal ${formatFileSize(
                                    error.data.details.maxFileSize
                                  )} groß sein`
                                );
                              }
                              // if it fails due to the `accept` set in the router config
                              if (error.data.code === "MIME_TYPE_NOT_ALLOWED") {
                                alert(
                                  `Dateityp nicht erlaubt. Erlaubte Typen sind  ${error.data.details.allowedMimeTypes.join(
                                    ", "
                                  )}`
                                );
                              }
                            }
                          }
                        })
                      );
                    }}
                    disabled={
                      !fileStates.filter(
                        (fileState) => fileState.progress === "PENDING"
                      ).length
                    }
                  >
                    Upload
                  </Button>

                  <FormMessage />
                  <FormDescription>
                    ** Fotos und Dokumente wie Leistungsverzeichnis,
                    Baugenehmigung o.ä. <br />
                    Max. 5 Dateien mit je einer Größe von max. 3MB
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormDescription>* Erforderlich</FormDescription>

            {form.formState.isValid && (
              <>
                <div className="flex items-top space-x-4 ">
                  <Checkbox
                    checked={isAccepted}
                    onCheckedChange={() => setIsAccepted(!isAccepted)}
                    className="mt-1 data-[state=checked]:bg-novo-red border-muted-foreground data-[state=checked]:text-white"
                  />
                  <FormDescription className="text-sm">
                    Ich stimme zu, dass meine Angaben aus dem Kontaktformular
                    zur Beantwortung meiner Anfrage erhoben und verarbeitet
                    werden. Die Daten werden nach abgeschlossener Bearbeitung
                    Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre
                    Einwilligung jederzeit für die Zukunft per E-Mail an{" "}
                    <a
                      className="text-novo-red"
                      href="mailto:info@novotec-gruppe.de"
                    >
                      info@novotec-gruppe.de
                    </a>{" "}
                    widerrufen. Detaillierte Informationen zum Umgang mit
                    Nutzerdaten finden Sie in unseren{" "}
                    <Link
                      className="text-novo-red"
                      href="/datenschutz"
                      target="_blank"
                    >
                      Datenschutzhinweisen.
                    </Link>
                  </FormDescription>
                </div>

                {isAccepted && (
                  <FormButton
                    className="bg-novo-red hover:bg-novo-red/50 text-white"
                    type="submit"
                    hookStatus={status}
                  >
                    Abschicken
                  </FormButton>
                )}
              </>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}

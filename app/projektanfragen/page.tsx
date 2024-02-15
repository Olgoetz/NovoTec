"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { useToast } from "@/components/ui/use-toast";
import { useAction } from "next-safe-action/hooks";
import ToastMessage from "@/components/toast-message";
import { FormSchema, TFormSchema, submitSafeInquiry } from "./_lib/actions";
import { FileState, MultiFileDropzone } from "@/components/multi-file-dropzone";
import { EdgeStoreApiClientError } from "@edgestore/react/shared";
import { formatFileSize } from "@edgestore/react/utils";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";

import Link from "next/link";

export default function Page() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

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

  const { toast } = useToast();
  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",

      fileUrls: [],
    },
  });

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

  const { execute, result, status } = useAction(submitSafeInquiry, {
    onSuccess() {
      toast({
        description: (
          <ToastMessage status="success">Nachricht verschickt!</ToastMessage>
        ),
      });
    },
    onError(data) {
      console.error(data);
      toast({
        description: (
          <ToastMessage status="fail">
            Fehler beim Verschicken. Versuche es später nochmal!
          </ToastMessage>
        ),
      });
    },
  });

  function onSubmit(values: TFormSchema) {
    const payload = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      description: values.description,
    };
    execute({ ...payload, fileUrlsString: values.fileUrls.toString() });
  }

  return (
    <>
      <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
        Starten sie ihre Projektanfrage
      </h2>
      <div className="max-w-xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobilfunknummer</FormLabel>
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
                  <FormLabel>Email Adresse</FormLabel>
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

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beschreiben Sie ihr Projekt</FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fileUrls"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fotos/Dokumente hochladen</FormLabel>
                  <FormControl>
                    <MultiFileDropzone
                      {...form.register("fileUrls")}
                      className="w-full"
                      value={fileStates}
                      dropzoneOptions={{
                        maxFiles: 5,
                      }}
                      //value={field.value}
                      //   onChange={field.onChange}
                      onChange={(files) => {
                        setFileStates(files);
                      }}
                      onFilesAdded={async (addedFiles) => {
                        // form.setValue("fileStates", [
                        //   ...field.value,
                        //   ...addedFiles,
                        // ]);
                        setFileStates([...fileStates, ...addedFiles]);
                        await Promise.all(
                          addedFiles.map(async (addedFileState) => {
                            try {
                              const res = await edgestore.publicFiles.upload({
                                file: addedFileState.file,

                                onProgressChange: async (progress) => {
                                  updateFileProgress(
                                    addedFileState.key,
                                    progress
                                  );
                                  if (progress === 100) {
                                    // wait 1 second to set it to complete
                                    // so that the user can see the progress bar at 100%
                                    await new Promise((resolve) =>
                                      setTimeout(resolve, 1000)
                                    );
                                    updateFileProgress(
                                      addedFileState.key,
                                      "COMPLETE"
                                    );
                                  }
                                },
                              });
                              await new Promise((resolve) =>
                                setTimeout(resolve, 1000)
                              );

                              const currentFileUrls =
                                form.getValues("fileUrls");
                              const newFileUrls = [...currentFileUrls, res.url];
                              form.setValue("fileUrls", newFileUrls);
                            } catch (error) {
                              updateFileProgress(addedFileState.key, "ERROR");
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
                                if (
                                  error.data.code === "MIME_TYPE_NOT_ALLOWED"
                                ) {
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
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    *Fotos und/oder Dokumente wie z.B. eine Baugenehmigung o.ä.,
                    damit wir einen besseren Eindruck für ihr Projekt gewinnen.
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormButton
              className="bg-novo-red hover:bg-novo-red/50 text-white"
              type="submit"
              hookStatus={status}
            >
              Abschicken
            </FormButton>
            <FormDescription>
              Wir verwenden Ihre Angaben zur Beantwortung Ihrer Anfrage. Weitere
              Informationen finden Sie in unseren{" "}
              <Link
                className="text-novo-red"
                href="/datenschutz"
                target="_blank"
              >
                Datenschutzhinweisen.
              </Link>
            </FormDescription>
          </form>
        </Form>
      </div>
    </>
  );
}

"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { TFormSchema } from "../_lib/validations";

import { FileState, MultiFileDropzone } from "@/components/multi-file-dropzone";
import { Button } from "@/components/ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { formatFileSize } from "@edgestore/react/utils";
import { EdgeStoreApiClientError } from "@edgestore/react/shared";
import { usePathname, useRouter } from "next/navigation";

interface Step8Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_8({ form }: Step8Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "8");
    replace(`${pathname}?${params.toString()}`);
  }, []);
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

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

      form.setValue("step8_fileStates", newFileStates);
      return newFileStates;
    });
  }
  return (
    <div>
      <div className="mb-8">
        <FormLabel className="text-base">Fotos</FormLabel>
        <FormDescription>
          Hier hast die Möglichkeit, bis zu fünf Fotos deiner neuesten Projekte
          hochzuladen (max. 5, höchstens 3 MB) . Das Hochladen der Fotos ist
          nicht verpflichtend.
        </FormDescription>
      </div>

      <FormField
        control={form.control}
        name="step8"
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>Fotos/Dokumente hochladen**</FormLabel> */}
            <FormControl>
              <MultiFileDropzone
                {...form.register("step8")}
                className="w-full"
                value={form.getValues("step8_fileStates")}
                dropzoneOptions={{
                  maxFiles: 5,
                  maxSize: 3 * 1024 * 1024,
                  accept: {
                    "image/*": [".png", ".jpg", ".jpeg"],
                  },
                }}
                //value={field.value}
                //   onChange={field.onChange}
                onChange={(files) => {
                  setFileStates(files);
                  form.setValue("step8_fileStates", files);
                }}
                onFilesAdded={async (addedFiles) => {
                  setFileStates([...fileStates, ...addedFiles]);
                  form.setValue("step8_fileStates", [
                    ...fileStates,
                    ...addedFiles,
                  ]);
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
                      const currentFileUrls = form.getValues("step8");

                      const newFileUrls = [...(currentFileUrls || []), res.url];
                      form.setValue("step8", newFileUrls, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
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
          </FormItem>
        )}
      />
    </div>
  );
}

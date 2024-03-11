"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user-store";
import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { FormErrors } from "./form-errors";

type FormPickerProps = {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const { pending } = useFormStatus();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [image, setImage] = useState<Record<string, any> | null>(null);

  const userTopic = useUserStore((state) => state.topic);
  const setTopic = useUserStore((state) => state.setTopic);

  const setImageUrl = useUserStore((state) => state.setImageUrl);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.search.getPhotos({
          query: userTopic.toLowerCase(),
          perPage: 1,
          orientation: "landscape",
        });

        if (result.status !== 200 || !result.response) {
          throw new Error("Something went wrong");
        }

        const imageRecord = result.response.results[0];

        setImage(imageRecord);
        setImageUrl(imageRecord.urls.full);
      } catch (error) {
        setImage(null);
        setImageUrl("");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [userTopic]);

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="h-6 w-6 text-sky-700 animate-spin" />
      </div>
    );
  }

  if (!userTopic || !image) return null;

  return (
    <div className="relative">
      <div
        key={image.id}
        className={cn(
          "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",
          pending && "opacity-50 hover:opacity-50 cursor-auto"
        )}
        onClick={() => {
          if (pending) return;

          setTopic("");
        }}
      >
        <Image
          src={image.urls.full}
          alt="Unsplash image"
          className="object-cover rounded-sm"
          fill
        />
      </div>
      <FormErrors id="image" errors={errors} />
    </div>
  );
};

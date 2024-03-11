"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modal-store";
import { useUserStore } from "@/store/user-store";
import { User } from "@/types/custom";

type UserDetails = User;

export const RenderUserDetails = ({
  name,
  surname,
  topic,
  imageUrl,
}: UserDetails) => {
  const modalOnOpen = useModalStore((state) => state.onOpen);
  const clearUserData = useUserStore((state) => state.clearUserData);

  return (
    <article className="relative isolate flex w-[250px] h-[250px] md:w-[500px] md:h-[500px] max-w-2xl flex-col gap-x-8 gap-y-6">
      <div className="relative flex-none h-full">
        <Image
          className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
          src={imageUrl!}
          alt="Unsplash Image"
          fill
        />

        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
      </div>

      <>
        <div className="flex items-center gap-x-4">
          <span className="text-2xl leading-6 text-gray-600">
            {name} {surname}
          </span>

          <span className="cursor-pointer ml-auto relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xl font-medium text-gray-600 hover:bg-gray-100">
            {topic}
          </span>
        </div>
      </>

      <div className="flex gap-4 justify-between">
        <Button onClick={modalOnOpen} className="md:w-[200px] md:h-[50px]">
          Edit Profile
        </Button>

        <Button onClick={clearUserData} className="md:w-[200px] md:h-[50px]">
          Reset
        </Button>
      </div>
    </article>
  );
};

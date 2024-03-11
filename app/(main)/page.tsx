'use client';

import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modal-store";

export default function Home() {
  const onOpen = useModalStore((state) => state.onOpen);

  return (
    <>
      <section>
        <Button
          onClick={onOpen}
          className="block mr-2"
          variant="ghost"
          size="sm"
        >
          Open modal
        </Button>
      </section>
    </>
  );
}

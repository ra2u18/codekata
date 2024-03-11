"use client";

import { UserPreferencesModal } from "@/app/(main)/_components/modals/user-preferences-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <UserPreferencesModal />
    </>
  );
};

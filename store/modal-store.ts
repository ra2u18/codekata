import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  isOpen: boolean;
};

type Actions = {
  onOpen: () => void;
  onClose: () => void;
};

export const useModalStore = create(
  persist<State & Actions>(
    (set) => ({
      isOpen: true,
      onClose: () => set(() => ({ isOpen: false })),
      onOpen: () => set(() => ({ isOpen: true })),
    }),
    {
      name: "modal-visibility",
    }
  )
);

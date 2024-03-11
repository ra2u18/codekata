import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  showModal: boolean;
};

type Actions = {
  toggleModal: () => void;
};

export const useModalStore = create(
  persist<State & Actions>(
    (set, get) => ({
      showModal: true,
      toggleModal: () => set(() => ({ showModal: !get().showModal })),
    }),
    {
      name: "modal-visibility",
    }
  )
);

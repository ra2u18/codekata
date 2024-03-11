import { create } from "zustand";
import { persist } from "zustand/middleware";

type Topic = "Travel" | "Cars" | "Wildlife" | "Technology" | "Other";

type User = {
  name: string;
  surname: string;
  topic: Topic | string;
};

type State = {
  user: User | null;
};

type Actions = {
  setUserData: (data: User) => void;
  clearUserData: () => void;
};

export const useModalStore = create(
  persist<State & Actions>(
    (set) => ({
      user: null,
      setUserData: (data: User) => set(() => ({ user: data })),
      clearUserData: () => set(() => ({ user: null })),
    }),
    {
      name: "user-data",
    }
  )
);

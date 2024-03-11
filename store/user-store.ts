import { PREDEFINED_TOPICS } from "@/types/constants";
import { Topic, User } from "@/types/custom";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  name: string;
  surname: string;
  topic: Topic | string;
  imageUrl: string | null;
};

type Actions = {
  clearUserData: () => void;
  setName: (name: string) => void;
  setSurname: (surname: string) => void;
  setTopic: (topic: Topic | string) => void;
  setImageUrl: (imageUrl: string) => void;
  setData: (data: Partial<User>) => void;
};

export const useUserStore = create(
  persist<State & Actions>(
    (set) => ({
      name: "",
      surname: "",
      topic: "",
      imageUrl: null,

      setName: (name: string) => set(() => ({ name })),
      setSurname: (surname: string) => set(() => ({ surname })),
      setImageUrl: (imageUrl: string) => set(() => ({ imageUrl })),
      setTopic: (topic: Topic | string) => set(() => ({ topic })),
      setData: (data: Partial<User>) => set(() => { 
        console.log(data);
        return { ...data };
      }),
      clearUserData: () =>
        set(() => ({
          name: "",
          surname: "",
          topic: "",
          imageUrl: null,
        })),
    }),
    {
      name: "user-data",
    }
  )
);

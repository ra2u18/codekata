import { create } from 'zustand';

type State = {
  showModal: boolean;
}

type Actions = {
  setShowModal: (show: boolean) => void;
}

export const useModalStore = create<State & Actions>((set) => ({
  showModal: true,
  setShowModal: (show: boolean) => set(() => ({ showModal: show }))
}));

import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  toggle: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

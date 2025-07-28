import { section } from "motion/react-client";
import { create } from "zustand";

type Section = "main" | "auto" | "rail" | "materials" | "contacts";

interface MenuState {
  isOpen: boolean;
  depth: 1 | 2 | 3;
  toggle: () => void;
  section: Section;
  toggleSection: (section: Section) => void;
  close: () => void;
}

const depths = {
  main: 1,
  auto: 2,
  rail: 2,
  materials: 2,
  contacts: 2,
} as const;

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
  section: "main",
  depth: 1,
  toggleSection: (section) => set(() => ({ section, depth: depths[section] })),
}));

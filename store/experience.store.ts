import { SanityExperience } from "@/sanity/types";
import { StateCreator } from "zustand";
import { StoreState } from ".";

export interface ExperienceState {
  experienceData: SanityExperience[] | null;
  experienceStatus: "idle" | "loading" | "success" | "error";
  experienceError: string | null;
  setExperienceLoading: () => void;
  setExperienceData: (data: SanityExperience[]) => void;
  setExperienceError: (message: string) => void;
}

export const useExperienceStore: StateCreator<
  StoreState,
  [],
  [],
  ExperienceState
> = (set) => ({
  experienceData: null,
  experienceStatus: "idle",
  experienceError: null,
  setExperienceLoading: () =>
    set((state) => ({
      ...state,
      experienceStatus: "loading",
      experienceError: null,
    })),
  setExperienceData: (data: SanityExperience[]) =>
    set((state) => ({
      ...state,
      experienceData: data,
      experienceStatus: "success",
    })),
  setExperienceError: (message: string) =>
    set((state) => ({
      ...state,
      experienceStatus: "error",
      experienceError: message,
    })),
});

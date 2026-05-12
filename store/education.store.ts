import { StateCreator } from "zustand";
import type { SanityEducation, Status } from "@/sanity/types";
import { StoreState } from ".";

export interface EducationState {
  educationData: SanityEducation[] | null;
  educationStatus: Status;
  educationError: string | null;
  // Actions — only the store mutates its own state
  setEducationLoading: () => void;
  setEducationData: (data: SanityEducation[]) => void;
  setEducationError: (message: string) => void;
}

export const useEducationStore: StateCreator<
  StoreState,
  [],
  [],
  EducationState
> = (set) => ({
  educationData: null,
  educationStatus: "idle",
  educationError: null,
  setEducationLoading: () =>
    set((state) => ({
      ...state,
      educationStatus: "loading",
      educationError: null,
    })),
  setEducationData: (data: SanityEducation[]) =>
    set((state) => ({
      ...state,
      educationData: data,
      educationStatus: "success",
    })),
  setEducationError: (message: string) =>
    set((state) => ({
      ...state,
      educationStatus: "error",
      educationError: message,
    })),
});

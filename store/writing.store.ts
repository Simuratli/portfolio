import { SanityWriting } from "@/sanity/types";
import { StateCreator } from "zustand";
import { StoreState } from ".";

export interface WritingState {
  writingData: SanityWriting[] | null;
  writingStatus: "idle" | "loading" | "success" | "error";
  writingError: string | null;
  setWritingLoading: () => void;
  setWritingData: (data: SanityWriting[]) => void;
  setWritingError: (message: string) => void;
}

export const useWritingStore: StateCreator<StoreState, [], [], WritingState> = (
  set,
) => ({
  writingData: null,
  writingStatus: "idle",
  writingError: null,
  setWritingLoading: () =>
    set((state) => ({ ...state, writingStatus: "loading", writingError: null })),
  setWritingData: (data: SanityWriting[]) =>
    set((state) => ({ ...state, writingData: data, writingStatus: "success" })),
  setWritingError: (message: string) =>
    set((state) => ({ ...state, writingStatus: "error", writingError: message })),
});

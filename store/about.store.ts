import { StateCreator } from "zustand";
import type { SanityAbout, Status } from "@/sanity/types";
import { StoreState } from ".";

export interface AboutState {
  userData: SanityAbout | null;
  status: Status;
  error: string | null;
  // Actions — only the store mutates its own state
  setLoading: () => void;
  setData: (data: SanityAbout) => void;
  setError: (message: string) => void;
}

export const useAboutStore: StateCreator<StoreState, [], [], AboutState> = (
  set,
) => ({
  userData: null,
  status: "idle",
  error: null,
  setLoading: () => set({ status: "loading", error: null }),
  setData: (data) => set({ userData:data, status: "success" }),
  setError: (message) => set({ status: "error", error: message }),
});

import { SanityProject } from "@/sanity/types";
import { StateCreator } from "zustand";
import { StoreState } from ".";

export interface ProjectState {
  projectData: SanityProject[] | null;
  projectStatus: "idle" | "loading" | "success" | "error";
  projectError: string | null;
  setProjectLoading: () => void;
  setProjectData: (data: SanityProject[]) => void;
  setProjectError: (message: string) => void;
}

export const useProjectStore: StateCreator<
  StoreState,
  [],
  [],
  ProjectState
> = (set) => ({
  projectData: null,
  projectStatus: "idle",
  projectError: null,
  setProjectLoading: () =>
    set((state) => ({
      ...state,
      projectStatus: "loading",
      projectError: null,
    })),
  setProjectData: (data: SanityProject[]) =>
    set((state) => ({
      ...state,
      projectData: data,
      projectStatus: "success",
    })),
  setProjectError: (message: string) =>
    set((state) => ({
      ...state,
      projectStatus: "error",
      projectError: message,
    })),
});

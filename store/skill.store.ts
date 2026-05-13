import { SanitySkill } from "@/sanity/types";
import { StateCreator } from "zustand";
import { StoreState } from ".";

export interface SkillState {
  skillData: SanitySkill[] | null;
  skillStatus: "idle" | "loading" | "success" | "error";
  skillError: string | null;
  setSkillLoading: () => void;
  setSkillData: (data: SanitySkill[]) => void;
  setSkillError: (message: string) => void;
}

export const useSkillStore: StateCreator<StoreState, [], [], SkillState> = (
  set,
) => ({
  skillData: null,
  skillStatus: "idle",
  skillError: null,
  setSkillLoading: () =>
    set((state) => ({ ...state, skillStatus: "loading", skillError: null })),
  setSkillData: (data: SanitySkill[]) =>
    set((state) => ({ ...state, skillData: data, skillStatus: "success" })),
  setSkillError: (message: string) =>
    set((state) => ({ ...state, skillStatus: "error", skillError: message })),
});

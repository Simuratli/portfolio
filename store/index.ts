import { create } from "zustand";
import { type AboutState, useAboutStore } from "./about.store";
import { type EducationState, useEducationStore } from "./education.store";
import { type ExperienceState, useExperienceStore } from "./experience.store";

export type StoreState = AboutState & EducationState & ExperienceState;

export const useStore = create<StoreState>()((...a) => ({
  ...useAboutStore(...a),
  ...useEducationStore(...a),
  ...useExperienceStore(...a),
}));

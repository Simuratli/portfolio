import { create } from "zustand";
import { type AboutState, useAboutStore } from "./about.store";
import { type EducationState, useEducationStore } from "./education.store";

export type StoreState = AboutState & EducationState;

export const useStore = create<StoreState>()((...a) => ({
  ...useAboutStore(...a),
  ...useEducationStore(...a),
}));

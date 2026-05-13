import { create } from "zustand";
import { type AboutState, useAboutStore } from "./about.store";
import { type EducationState, useEducationStore } from "./education.store";
import { type ExperienceState, useExperienceStore } from "./experience.store";
import { type ProjectState, useProjectStore } from "./project.store";
import { type SkillState, useSkillStore } from "./skill.store";

export type StoreState = AboutState & EducationState & ExperienceState & ProjectState & SkillState;

export const useStore = create<StoreState>()((...a) => ({
  ...useAboutStore(...a),
  ...useEducationStore(...a),
  ...useExperienceStore(...a),
  ...useProjectStore(...a),
  ...useSkillStore(...a),
}));

import { create } from "zustand";
import { type AboutState, useAboutStore } from "./about.store";

export type StoreState = AboutState

export const useStore = create<StoreState>()((...a) => ({
  ...useAboutStore(...a),
}));

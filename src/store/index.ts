import { create } from "zustand";
import { AlertState, useAlertState } from "./alert";

export const useStore = create<AlertState>()((...a) => ({
  ...useAlertState(...a),
}));

import { StateCreator } from "zustand";

export interface AlertState {
  showAlert: boolean;
  alertText: string;
  setAlert: (open: boolean, text: string) => void;
}

export const useAlertState: StateCreator<AlertState> = (set) => ({
  showAlert: false,
  alertText: "",
  setAlert: (open, text) => set({ showAlert: open, alertText: text }),
});

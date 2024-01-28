import { ActionButtonEnumType } from "../../types/global.types";
import React from "react";
export interface ActionButtonPropTypes {
  text: string;
  onClick: () => void;
  type: ActionButtonEnumType;
  icon: React.ReactNode;
}

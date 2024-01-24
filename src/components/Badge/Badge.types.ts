import React from "react";
import { BadgeEnumType } from "../../types/global.types";
export interface BadgePropType {
  children: React.ReactNode;
  bgColor?: string;
  type?: BadgeEnumType;
}

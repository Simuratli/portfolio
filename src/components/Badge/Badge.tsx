import React from "react";
import { BadgePropType } from "./Badge.types";
const Badge = ({ children, bgColor, type }: BadgePropType) => {
  return <div className={`badge ${bgColor} ${type}`}>{children}</div>;
};

export default Badge;

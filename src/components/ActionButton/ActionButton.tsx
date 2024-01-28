import React from "react";
import { ActionButtonPropTypes } from "./ActionButton.types";
const ActionButton = ({ text, onClick, type, icon }: ActionButtonPropTypes) => {
  return (
    <button onClick={onClick} className={`actionButton ${type}`}>
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default ActionButton;

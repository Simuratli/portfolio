import React from "react";
import { AlertPropTypes } from "./Alert.types";
const Alert = ({ text }: AlertPropTypes) => {
  return (
    <div className="alert">
      <div className="alert__content">{text}</div>
    </div>
  );
};

export default Alert;

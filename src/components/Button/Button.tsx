import React from "react";
import ButtonThick from "../../assets/images/button.svg";
import { ButtonPropTypes } from "./Button.types";
const Button = ({ text, onClick }: ButtonPropTypes) => {
  return (
    <div className="button__container">
      <button onClick={onClick}>{text}</button>
      <img src={ButtonThick} alt="" />
    </div>
  );
};

export default Button;

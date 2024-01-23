import React from "react";
import ButtonThick from "../../assets/images/button.svg";
const Button = () => {
  return (
    <div className="button__container">
      <button>See Portfolio</button>
      <img src={ButtonThick} alt="" />
    </div>
  );
};

export default Button;

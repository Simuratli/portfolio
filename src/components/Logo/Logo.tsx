import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../../assets/images/logo.svg";
const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={LogoImage} alt="Star" />
        simuratli
      </NavLink>
    </div>
  );
};

export default Logo;

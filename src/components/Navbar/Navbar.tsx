import React from "react";
import { NavLink } from "react-router-dom";
import Star from "../../assets/star";
import Logo from "../../assets/images/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Star top={-50} right={-50} />
      <div className="navbar__content">
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <div className="navbar__logo">
          <NavLink to="/">
            <img src={Logo} alt="Star" />
            simuratli
          </NavLink>

          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar__element__container">
          <div className="navbar__element">
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="navbar__element">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </div>
          <div className="navbar__element">
            <NavLink to="/hire">Hire Me</NavLink>
          </div>
        </div>
      </div>
      <Star left={-70} />
    </nav>
  );
};

export default Navbar;

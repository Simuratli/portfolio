import React from "react";
import { Link } from "react-router-dom";
import Star from "../../assets/star";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Star />
      <div className="navbar__content">
        <div className="navbar__logo"></div>
        <div className="navbar__element">
          <Link to="/about">About</Link>
        </div>
        <div className="navbar__element">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="navbar__element">
          <Link to="/hire">Hire Me</Link>
        </div>
      </div>
      <Star />
    </nav>
  );
};

export default Navbar;

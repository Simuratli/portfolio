import React from "react";
import { NavLink } from "react-router-dom";
import Star from "../../assets/star";
import { useNavbar } from "../../hooks/useNavbar";
import Logo from "../Logo";
const Navbar = () => {
  const { openNavbar, setOpenNavbar } = useNavbar();
  return (
    <nav className="navbar">
      <Star top={-50} right={-50} />
      <div className="navbar__content">
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <div className="navbar__logo">
          <Logo />

          <div
            onClick={() => {
              setOpenNavbar((prev) => !prev);
            }}
            className={`hamburger ${openNavbar && "open"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar__element__container">
          <div className="navbar__element">
            <NavLink to="/about">
              <mark>About</mark>
            </NavLink>
          </div>
          <div className="navbar__element">
            <NavLink to="/portfolio">
              <mark>Portfolio</mark>
            </NavLink>
          </div>
          <div className="navbar__element">
            <NavLink to="/hire">
              <mark>Hire Me</mark>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={`navbar__mobile ${openNavbar && "open"}`}>
        <div className="navbar__mobile__content">
          <NavLink
            onClick={() => {
              setOpenNavbar(false);
            }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              setOpenNavbar(false);
            }}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            onClick={() => {
              setOpenNavbar(false);
            }}
            to="/hire"
          >
            Hire me
          </NavLink>
        </div>
      </div>
      <Star left={-70} />
    </nav>
  );
};

export default Navbar;

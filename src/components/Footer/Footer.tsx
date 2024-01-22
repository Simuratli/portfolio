import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import Medium from "../../assets/images/medium.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Twitter from "../../assets/images/twitter.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
      <div className="footer__text">Portfolio 2024</div>
      <div className="footer__social">
        <Link to="/medium">
          <img src={Medium} alt="" />
        </Link>
        <Link to="/linkedin">
          <img src={Linkedin} alt="" />
        </Link>
        <Link to="/twitter">
          <img src={Twitter} alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

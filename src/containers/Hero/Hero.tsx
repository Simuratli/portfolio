import React from "react";
import { Header, Avatar, Button } from "../../components";
import Sun from "../../assets/images/sun.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <img className="hero__sun" src={Sun} alt="Simuratli Sun" />
        <Header />
        <Button />
      </div>
      <div className="hero__image">
        <Avatar />
      </div>
    </div>
  );
};

export default Hero;

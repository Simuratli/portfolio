import React from "react";
import { Header, Avatar, Button } from "../../components";
import Sun from "../../assets/images/sun.svg";
import { HeaderType } from "../../types/global.types";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <img className="hero__sun" src={Sun} alt="Simuratli Sun" />
        <Header type={HeaderType.BIG}>
          I design ✍️ top <br />
          notch <mark>websites</mark>
        </Header>
        <Button />
      </div>
      <div className="hero__image">
        <Avatar />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Header, Avatar, Button } from "../../components";
import SunIcon from "../../assets/sun";
import { HeaderType } from "../../types/global.types";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero__content">
        <SunIcon className="hero__sun" />
        <Header type={HeaderType.BIG}>
          I create ✍️ top <br />
          notch <mark>solutions</mark>
        </Header>
        <Button
          text="See Portfolio"
          onClick={() => {
            navigate("/portfolio");
          }}
        />
      </div>
      <div className="hero__image">
        <Avatar />
      </div>
    </div>
  );
};

export default Hero;

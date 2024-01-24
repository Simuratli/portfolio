import React from "react";
import Marquee from "react-fast-marquee";
import { MarqueCard } from "../../components";
const Marque = () => {
  return (
    <Marquee className="marque">
      <MarqueCard text="CSS" />
      <MarqueCard text="React js" />
      <MarqueCard text="Next js" />
      <MarqueCard text="Javascript" />
      <MarqueCard text="Sanity io" />
      <MarqueCard text="Dynamics 365" />
      <MarqueCard text="Typescript" />
    </Marquee>
  );
};

export default Marque;

import React from "react";
import { Button } from "../../components";
import Star from "../../assets/star";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactCard">
        <Star top={-67} className="contactCard__star" />
        <h1 className="contactCard__header">
          Let’s start designing your project
        </h1>
        <p>
          Want to see how to transform your brand into a unique style. sent us a
          message
        </p>
        <Button
          onClick={() => {
            window.open(
              "https://telegram.me/simuratli",
              "_blank",
              "noopener,noreferrer",
            );
          }}
          text="Send us message"
        />
      </div>
    </div>
  );
};

export default Contact;

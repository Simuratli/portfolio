import React from "react";
import AvatarBg from "../../assets/images/avatarBg.svg";
import Arrow from "../../assets/images/arrow.svg";
const Avatar = () => {
  return (
    <div className="avatar">
      <img className="avatar__arrow" src={Arrow} alt="" />
      <img className="avatar__profile" src={AvatarBg} alt="" />
    </div>
  );
};

export default Avatar;

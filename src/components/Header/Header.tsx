import React from "react";
import { HeaderPropTypes } from "./Header.types";
const Header = ({ children, type }: HeaderPropTypes) => {
  return <div className={`header ${type}`}>{children}</div>;
};

export default Header;

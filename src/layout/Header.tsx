import React from "react";
import { ReactComponent as Logo } from "../assets/plane.svg";
import "./header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <Logo />
    </header>
  );
};

export default Header;

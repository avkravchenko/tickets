import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/plane.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <Logo />
    </header>
  );
};

export default Header;

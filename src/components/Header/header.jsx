import React from "react";
import "./header.css";
import Logo from "../Logo/logo.jsx";
import Menu from "../Menu/menu.jsx";
import Buttons from "../Buttons/buttons.jsx";

export default function Header() {
  return (
    <div className="header">

      <Logo />
      <Menu />
      <Buttons/>

    </div>
  );
}

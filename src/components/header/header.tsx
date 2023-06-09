import React from "react";
import { APP_TITLE } from "../../helpers/constants";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">{APP_TITLE}</h1>
    </header>
  );
};

export default Header;

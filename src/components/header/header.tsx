import React from "react";
import { APP_TITLE } from "../../helpers/constants";
import { useLoading } from "../../hooks/useLoading";
import Spinner from "../spinner/spinner";
import "./header.scss";

const Header = () => {
  const [isLoading] = useLoading()

  return (
    <header className="header">
      <h1 className="title">{APP_TITLE}</h1>
      {
        isLoading &&
        <Spinner />
      }
    </header>
  );
};

export default Header;

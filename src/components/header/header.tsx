import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_TITLE } from "../../helpers/constants";
import { useStatus } from "../../hooks/useStatus";
import { Status } from "../../store/slices/status";
import Spinner from "../spinner/spinner";
import "./header.scss";

const Header = () => {
  const [status] = useStatus();
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="title" onClick={() => navigate("/")}>
        {APP_TITLE}
      </h1>
      {status === Status.FetchingData && <Spinner />}
    </header>
  );
};

export default Header;

import React from "react";
import { APP_TITLE } from "../../helpers/constants";
import useRouting from "../../hooks/useNavigation";
import { useStatus } from "../../hooks/useStatus";
import { Status } from "../../store/slices/status";
import Spinner from "../spinner/spinner";
import "./header.scss";

const Header = () => {
  const [status] = useStatus();
  const [navigation] = useRouting();

  return (
    <header className="header">
      <h1 className="title" onClick={() => navigation.navigateTo("/")}>
        {APP_TITLE}
      </h1>
      {status === Status.FetchingData && <Spinner />}
    </header>
  );
};

export default Header;

import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Message from "./components/message/message";
import { GENERAL_ERROR } from "./helpers/constants";
import { useStatus } from "./hooks/useStatus";
import { Status } from "./store/slices/status";

const App = () => {
  const [status] = useStatus();
  const serviceFailed = status === Status.ServiceFailed;
  return (
    <>
      <Header />
      {serviceFailed && <Message content={GENERAL_ERROR} />}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;

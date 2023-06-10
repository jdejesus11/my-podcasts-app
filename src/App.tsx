import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { usePodcasts } from "./hooks/usePodcasts";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;

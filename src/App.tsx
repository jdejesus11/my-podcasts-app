import React from "react";
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Episode from "./container/episode/episode";

const App = () => {
  return (
    <>
      <Header />
      <main className="main"><Episode /></main>
      <Footer />
    </>
  );
};

export default App;

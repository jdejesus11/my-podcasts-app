import React from "react";
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">Hello World</main>
      <Footer />
    </>
  );
};

export default App;

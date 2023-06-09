import React from "react";
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Podcast from "./container/podcast/podcast";
import Podcasts from "./container/podcasts/podcasts";

const App = () => {
  return (
    <>
      <Header />
      <main className="main"><Podcast /></main>
      <Footer />
    </>
  );
};

export default App;

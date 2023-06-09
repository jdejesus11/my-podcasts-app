import React from "react";
import "./App.scss";
import CardList from "./components/card-list/card-list";
import Card from "./components/card/card";
import CounterBar from "./components/counter-bar/counter-bar";
import DataGrid from "./components/data-grid/data-grid";
import EpisodeDetail from "./components/episode-detail/episode-detail";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Message from "./components/message/message";
import Spinner from "./components/spinner/spinner";
import Summary from "./components/summary/summary";
import TextInput from "./components/text-input/text-input";

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;

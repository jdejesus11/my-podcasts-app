import React from "react";
import "./App.scss";
import { usePodcasts } from "./hooks/usePodcasts";

const App = () => {
  const [data] = usePodcasts();
  return <>Hello WOrld</>;
};

export default App;

import React from "react";
import "./App.scss";
import CardList from "./components/card-list/card-list";
import Card from "./components/card/card";
import CounterBar from "./components/counter-bar/counter-bar";
import DataGrid from "./components/data-grid/data-grid";
import EpisodeDetail from "./components/episode-detail/episode-detail";
import Spinner from "./components/spinner/spinner";
import Summary from "./components/summary/summary";
import TextInput from "./components/text-input/text-input";

const App = () => {
  return (
    <>
      <h1 className="title">Podcaster</h1>
      <h2 className="episode__number">Episode: 33</h2>
      <h2 className="card__title">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </h2>
      <h2 className="card__title">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </h2>
      <p className="card__author">Author: Lorem Ipsum es simplemente el texto</p>
      <h3 className="summary-podcast__title">Innocence</h3>
      <p className="summary-podcast__author">By Kenny G</p>
      <p className="summary-podcast__description">
        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
        El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras
      </p>
      <TextInput
        onChange={(value: string) => {
          console.log(value);
        }}
        placeholder="Filter podcasts..."
      />
      <div>
        <DataGrid
          data={[
            {
              id: "1",
              title: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
              date: "01/01/2012",
              duration: "12:00",
            },
            {
              id: "1",
              title: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
              date: "01/01/2012",
              duration: "12:00",
            },
            { id: "1", title: "Episode 1", date: "01/01/2012", duration: "12:00" },
            { id: "1", title: "Episode 1", date: "01/01/2012", duration: "12:00" },
            { id: "1", title: "Episode 1", date: "01/01/2012", duration: "12:00" },
          ]}
        />
      </div>
      <div>
        <CardList
          podcasts={[
            { id: "1", title: "Episode 1", author: "Kania W." },
            { id: "1", title: "Episode 1", author: "Kania W." },
            { id: "1", title: "Episode 1", author: "Kania W." },
            { id: "1", title: "Episode 1", author: "Kania W." },
            { id: "1", title: "Episode 1", author: "Kania W." },
          ]}
        />
      </div>
      <div>
        <Summary podcast={{ id: "1", title: "Episode 1", author: "Kania W." }} />
      </div>
      <Spinner />
      <CounterBar title={"Episodes: 66"} />
      <EpisodeDetail episode={{id:"1", title:"Episode 1"}} />
    </>
  );
};

export default App;

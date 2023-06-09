import React from "react";
import DataGrid from "../../components/data-grid/data-grid";
import EpisodeDetail from "../../components/episode-detail/episode-detail";
import Summary from "../../components/summary/summary";
import { Podcast } from "../../models/models";
import "./podcast.scss";

const Podcast = () => {
  return (
    <div className="podcast">
      <section className="podcast__summary">
        <Summary
          podcast={{
            id: "1",
            title:
              "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos ",
            author: "Julian Solo",
          }}
        />
      </section>
      <section>
        <EpisodeDetail episode={
          {id:"1", title:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos " }
          }  />
      </section>
    </div>
  );
};

export default Podcast;

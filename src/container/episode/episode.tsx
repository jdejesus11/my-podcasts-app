import React from "react";
import CounterBar from "../../components/counter-bar/counter-bar";
import DataGrid from "../../components/data-grid/data-grid";
import "./episode.scss";

const Episode = () => {
  return (
    <>
      <div className="episode-counter">
        <CounterBar title={`Episodes: 66`} />
      </div>
      <DataGrid
        data={[
          {
            id: "1",
            title:
              "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos ",
            author: "Julian Solo",
          },
          {
            id: "1",
            title:
              "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos ",
            author: "Julian Solo",
          },
          {
            id: "1",
            title: "Lorep Ipsum",
          },
          {
            id: "1",
            title: "Lorep Ipsum",
            author: "Julian Solo Julian Solo Julian Solo",
          },
        ]}
      />
    </>
  );
};

export default Episode;

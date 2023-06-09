import React from "react";
import CardList from "../../components/card-list/card-list";
import TextInput from "../../components/text-input/text-input";
import "./podcasts.scss";

const Podcasts = () => {
  const onFilterChange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <section className="podcast-filtering">
        <TextInput placeholder="Filter podcasts..." ariaLabel="to filter podcasts" onChange={onFilterChange} />
      </section>
      <section className="podcast-list">
        {
          <CardList
            podcasts={[
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
        }
      </section>
    </>
  );
};

export default Podcasts;

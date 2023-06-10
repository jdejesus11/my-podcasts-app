import React from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/card-list/card-list";
import TextInput from "../../components/text-input/text-input";
import { selectPodcasts } from "../../store/store";
import "./podcasts.scss";

const Podcasts = () => {

  const data = useSelector(selectPodcasts);

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
            podcasts={data.podcasts}
          />
        }
      </section>
    </>
  );
};

export default Podcasts;

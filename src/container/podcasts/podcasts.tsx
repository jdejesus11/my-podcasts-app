import React from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/card-list/card-list";
import TextInput from "../../components/text-input/text-input";
import { usePodcasts } from "../../hooks/usePodcasts";
import "./podcasts.scss";

const Podcasts = () => {
  const [state, methods ] = usePodcasts();

  const onFilterChange = (value: string) => {
      methods.setQuery(value)
  };

  return (
    <>
      {!state.isLoading && (
        <>
          <section className="podcast-filtering">
            <TextInput
              placeholder="Filter podcasts..."
              ariaLabel="to filter podcasts"
              onChange={onFilterChange}
            />
          </section>
          <section className="podcast-list">
            {<CardList podcasts={state.podcasts} />}
          </section>
        </>
      )}
    </>
  );
};

export default Podcasts;

import React from "react";
import CardList from "../../components/card-list/card-list";
import MessageBanner from "../../components/message-banner/message-banner";
import TextInput from "../../components/text-input/text-input";
import { PODCASTS_FETCHING_MESSAGE } from "../../helpers/constants";
import { usePodcasts } from "../../hooks/usePodcasts";
import "./podcasts.scss";

const Podcasts = () => {
  const [state, methods ] = usePodcasts();

  const onFilterChange = (value: string) => {
      methods.setQuery(value)
  };

  return (
    <>
      {
        state.isLoading && 
        <MessageBanner message={PODCASTS_FETCHING_MESSAGE}  />
      }
      {!state.isLoading && !state.fetchingFailed && (
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

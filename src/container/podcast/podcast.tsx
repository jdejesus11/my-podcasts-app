import React from "react";
import { Outlet } from "react-router-dom";
import MessageBanner from "../../components/message-banner/message-banner";
import Summary from "../../components/summary/summary";
import { usePodcastDetail } from "../../hooks/usePodcastDetail";
import { Podcast } from "../../models/models";
import "./podcast.scss";

const Podcast = () => {
  const [data] = usePodcastDetail();

  return (
    <>
      {data?.episodes && !data.isLoading && !data.fetchingFailed && (
        <div className="podcast">
          <>
            <section className="podcast__summary">
              <Summary podcast={data.episodes[0]} />
            </section>
            <section>
              <Outlet />
            </section>
          </>
        </div>
      )}
      {!data ||
        (data.isLoading && (
          <MessageBanner message="We are working to get your podcast..." />
        ))}
    </>
  );
};

export default Podcast;

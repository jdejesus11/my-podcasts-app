import React from "react";
import EpisodeDetail from "../../components/episode-detail/episode-detail";
import { useEpisodeDetail } from "../../hooks/useEpisodeDetail";

const EpisodeDetailContainer = () => {
  const [data] = useEpisodeDetail();

  if (!data.episode) return;

  return <EpisodeDetail episode={data.episode} />;
};

export default EpisodeDetailContainer;

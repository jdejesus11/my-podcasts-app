import React from "react";
import { NO_AVAILABLE, NO_SUPPORTED_AUDIO } from "../../helpers/constants";
import { Episode } from "../../models/models";
import "./episode-detail.scss";

export interface EpisodeDetailProps {
  episode: Episode;
}

const EpisodeDetail = ({ episode }: EpisodeDetailProps) => {
  return (
    <div className="episode-detail">
      <h2 className="episode-detail__title">{episode.title}</h2>
      <p className="episode-detail__description">{`${episode?.description ?? NO_AVAILABLE}`}</p>
      <audio controls preload="none" className="episode-detail__audio">
        <source src={episode.audioURL} type={"audio/" + episode.episodeFileExtension} />
        {NO_SUPPORTED_AUDIO}
      </audio>
    </div>
  );
};

export default EpisodeDetail;

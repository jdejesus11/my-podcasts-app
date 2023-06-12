import React from "react";
import { NO_AVAILABLE, NO_SUPPORTED_AUDIO, NO_SUPPORTED_ELEMENT } from "../../helpers/constants";
import { isStringEmpty } from "../../helpers/helpers";
import useRouting from "../../hooks/useNavigation";
import { Episode } from "../../models/models";
import "./episode-detail.scss";

export interface EpisodeDetailProps {
  episode: Episode;
}

const SUPPORTED_MULTIMEDIA_TYPE = "audio";

const EpisodeDetail = ({ episode }: EpisodeDetailProps) => {
  const [navigation] = useRouting();
  return (
    <div className="episode-detail">
      <h2 className="episode-detail__title" onClick={() => navigation.goBack()} ><span className="is-clickable">{episode.title}</span></h2>
      <p className="episode-detail__description">{`${!isStringEmpty(episode?.description) ? episode?.description : NO_AVAILABLE}`}</p>
      {episode.episodeContentType === SUPPORTED_MULTIMEDIA_TYPE && (
        <audio controls preload="none" autoPlay className="episode-detail__audio">
          <source src={`${episode.audioURL}`} />
          {NO_SUPPORTED_AUDIO}
        </audio>
      )}
      {episode.episodeContentType !== SUPPORTED_MULTIMEDIA_TYPE && <span>{NO_SUPPORTED_ELEMENT}</span>}
    </div>
  );
};

export default EpisodeDetail;

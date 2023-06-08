import React from "react";
import "./summary.scss";
import defaultImage from "../../assets/noimage.png";
import { Podcast } from "../../models/models";
import Separator from "../separator/separator";
import { NO_AVAILABLE, NO_IMAGE_ALT, UKNOWN } from "../../helpers/constants";

export interface SummaryProps {
  podcast: Podcast;
}

const Summary = ({ podcast }: SummaryProps) => {
  return (
    <div className="summary">
      <div className="summary__header">
        <img src={podcast?.thumbnailURL ?? defaultImage} alt={podcast.thumbnailAlt ?? NO_IMAGE_ALT} className="summary__thumbnail" />
      </div>
      <Separator />
      <div className="summary__row">
        <h3 className="summary__title">{podcast.title}</h3>
        <p className="summary__author">{`By ${podcast?.author ?? UKNOWN}`}</p>
      </div>
      <Separator />
      <div className="summary__row">
        <p className="summary__description">{podcast?.description ?? NO_AVAILABLE}</p>
      </div>
    </div>
  );
};

export default Summary;

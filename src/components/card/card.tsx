import React from "react";
import { Podcast } from "../../models/models";
import "./card.scss";
import defaultImage from "../../assets/noimage.png";
import { NO_IMAGE_ALT, UKNOWN } from "../../helpers/constants";
import useRouting from "../../hooks/useNavigation";

export interface CardProps {
  podcast: Podcast;
}

const Card = ({ podcast }: CardProps) => {

  const [navigation] = useRouting();

  const onClick = (podcastId:string) => {
    navigation.navigateTo(`/podcasts/${podcastId}`)
  }

  return (
    <li
      className="card"
      onClick={() => {
        onClick(podcast.id)
      }}
    >
      <header className="card__thumbnail-container">
        <img src={podcast?.thumbnailURL ?? defaultImage} alt={podcast?.thumbnailAlt ?? NO_IMAGE_ALT} className="card__thumbnail" />
      </header>
      <h2 className="card__title">{podcast.title}</h2>
      <p className="card__author">{`Author: ${podcast?.author ?? UKNOWN}`}</p>
    </li>
  );
};

export default Card;

import React from "react";
import { Podcast } from "../../models/models";
import "./card.scss";
import defaultImage from "../../assets/noimage.png";

export interface CardProps {
  podcast: Podcast;
}

const Card = ({ podcast }: CardProps) => {
  return (
    <li
      className="card"
      onClick={() => {
        console.log("click");
      }}
    >
      <header className="card__thumbnail-container">
        <img src={podcast?.thumbnailURL ?? defaultImage} alt={podcast?.thumbnailAlt ?? "No Image"} className="card__thumbnail" />
      </header>
      <h2 className="card__title">{podcast.title}</h2>
      <p className="card__author">{`Author: ${podcast?.author ?? "N/A"}`}</p>
    </li>
  );
};

export default Card;

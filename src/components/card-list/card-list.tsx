import React from "react";
import Card from "../card/card";
import { Podcast } from "../../models/models";
import "./card-list.scss";

export interface CardListProps {
  podcasts: Podcast[];
}

const CardList = ({ podcasts }: CardListProps) => {
  return (
    <ul className="card-list" data-testid="list-001">
      {podcasts.map((podcast, key) => (
        <Card podcast={podcast} key={key} />
      ))}
    </ul>
  );
};

export default CardList;

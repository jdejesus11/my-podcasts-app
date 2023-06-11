import React from "react";
import CounterBar from "../../components/counter-bar/counter-bar";
import DataGrid from "../../components/data-grid/data-grid";
import { useOutletContext } from "react-router-dom";
import "./episode.scss";
import { Episode } from "../../models/models";

const Episode = () => {
  const episodes = useOutletContext<Episode[]>();
  return (
    <>
      <div className="episode-counter">
        <CounterBar title={`Episodes: ${episodes.length}`} />
      </div>
      <DataGrid data={episodes} />
    </>
  );
};

export default Episode;

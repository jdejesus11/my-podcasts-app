import React from "react";
import CounterBar from "../../components/counter-bar/counter-bar";
import DataGrid from "../../components/data-grid/data-grid";
import { useOutletContext } from "react-router-dom";
import "./episode.scss";
import { Episode } from "../../models/models";
import useRouting from "../../hooks/useNavigation";

const Episode = () => {
  const [navigation] = useRouting();
  const episodes = useOutletContext<Episode[]>();
  const onClick = () => {
    navigation.goBack();
  };

  return (
    <>
      <div className="episode-counter">
        <CounterBar title={`Episodes: ${episodes.length}`} onClick={onClick} />
      </div>
      <DataGrid data={episodes} />
    </>
  );
};

export default Episode;

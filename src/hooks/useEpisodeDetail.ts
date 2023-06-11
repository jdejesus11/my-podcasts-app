import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch, selectEpisode } from "../store/store";
import { useParams } from "react-router-dom";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useEpisodeDetail = () => {
  const { episodeId } = useParams();
  return [{ episode: useAppSelector(selectEpisode(episodeId)) }];
};

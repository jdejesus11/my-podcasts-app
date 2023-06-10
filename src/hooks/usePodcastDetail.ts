import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch, selectIsLoading, selectPodcastDetail } from "../store/store";
import { useEffect } from "react";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePodcastDetail = () => {
  
  useEffect(() => {
    // TODO: Write logic to fetch podcast detail
  }, []);

  const data = useSelector(selectPodcastDetail);
  const isLoading = useSelector(selectIsLoading);

  return [{ episodes: data.episodes, isLoading }];
};

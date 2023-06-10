import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch, selectPodcasts } from "../store/store";
import { useEffect } from "react";
import { fetchMostRelevantPodcast } from "../store/slices/podcasts";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePodcasts = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(fetchMostRelevantPodcast());
  }, []);

  const data = useSelector(selectPodcasts);

  return [{ podcasts: data.podcasts }];
};

// TODO: Write custom hook for podcast detail
/*
export const usePodcastDetail = () => {
    useEffect(() => {
    
    }, [])

    return []
} 
*/

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch, selectPodcasts, selectIsLoading } from "../store/store";
import { useEffect, useState } from "react";
import { fetchMostRelevantPodcast } from "../store/slices/podcasts";
import { unwrapResult } from "@reduxjs/toolkit";
import { SERVICE_ERROR } from "../helpers/constants";
import { activateLoading } from "../store/slices/is-loading";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePodcasts = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(activateLoading(true));
        const resultAction = await dispatch(fetchMostRelevantPodcast());
        unwrapResult(resultAction);
      } catch (error) {
        console.log(`${SERVICE_ERROR}: fetching most relevant podcasts`);
      } finally {
        dispatch(activateLoading(false));
      }
    }
    fetchData();
  }, []);

  const data = useSelector(selectPodcasts);
  const filteredData = data.podcasts.filter((podcast) => podcast.title.toLowerCase().includes(query) || podcast.author.toLowerCase().includes(query));
  const isLoading = useSelector(selectIsLoading);

  return [{ podcasts: query != "" ? filteredData : data.podcasts, isLoading, query }, { setQuery }];
};

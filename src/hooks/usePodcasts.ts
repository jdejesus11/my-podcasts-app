import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import {
  RootState,
  Dispatch,
  selectPodcasts,
  selectStatus,
} from "../store/store";
import { useEffect, useState } from "react";
import { fetchMostRelevantPodcast } from "../store/slices/podcasts";
import { unwrapResult } from "@reduxjs/toolkit";
import { SERVICE_ERROR } from "../helpers/constants";
import { activateStatus, Status } from "../store/slices/status";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePodcasts = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(activateStatus(Status.FetchingData));
        const resultAction = await dispatch(fetchMostRelevantPodcast());
        unwrapResult(resultAction);
      } catch (error) {
        console.log(`${SERVICE_ERROR}: fetching most relevant podcasts`);
        dispatch(activateStatus(Status.ServiceFailed));
      } finally {
        dispatch(activateStatus(null));
      }
    }
    fetchData();
  }, []);

  const data = useSelector(selectPodcasts);
  const filteredData =
    query != ""
      ? data.podcasts.filter(
          (podcast) =>
            podcast.title.toLowerCase().includes(query) ||
            podcast.author.toLowerCase().includes(query)
        )
      : data.podcasts;
  const status = useSelector(selectStatus);
  const isLoading = status === Status.FetchingData;
  const fetchingFailed = status === Status.ServiceFailed;

  return [
    { podcasts: filteredData, isLoading, fetchingFailed, query },
    { setQuery },
  ];
};

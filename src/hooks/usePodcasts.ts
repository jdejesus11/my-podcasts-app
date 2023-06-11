import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch, selectPodcasts, selectStatus } from "../store/store";
import { useEffect, useState } from "react";
import { fetchMostRelevantPodcast, initialize } from "../store/slices/podcasts";
import { unwrapResult } from "@reduxjs/toolkit";
import { PODCASTS_STORAGE_KEY, SERVICE_ERROR } from "../helpers/constants";
import { activateStatus, Status } from "../store/slices/status";
import { Episode, Podcast } from "../models/models";
import { retrieveData } from "../storage/storageAPI";
import { filterPodcastsByTitleOrAuthor } from "../helpers/helpers"

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
        const podcasts = unwrapResult(resultAction);
        return podcasts;
      } catch (error) {
        console.log(`${SERVICE_ERROR}: fetching most relevant podcasts`);
        dispatch(activateStatus(Status.ServiceFailed));
      } finally {
        dispatch(activateStatus(null));
      }
    }

    retrieveData(PODCASTS_STORAGE_KEY, fetchData, (data: Podcast[] | Episode[]) => dispatch(initialize(data)));
  }, []);

  const data = useSelector(selectPodcasts);
  const filteredData =
      query != ""
      ? filterPodcastsByTitleOrAuthor(data.podcasts, query)
      : data.podcasts;
  const status = useSelector(selectStatus);
  const isLoading = status === Status.FetchingData;
  const fetchingFailed = status === Status.ServiceFailed;
  return [{ podcasts: filteredData, isLoading, fetchingFailed, query }, { setQuery }];
};

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch, selectStatus, selectPodcastDetail } from "../store/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { activateStatus, Status } from "../store/slices/status";
import { fetchPodcastDetail, initialize } from "../store/slices/podcast-detail";
import { unwrapResult } from "@reduxjs/toolkit";
import { SERVICE_ERROR } from "../helpers/constants";
import { retrieveData } from "../storage/storageAPI";
import { Episode } from "../models/models";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePodcastDetail = () => {
  const { podcastId, episodeId } = useParams();
  const dispatch = useDispatch<Dispatch>();
  const data = useSelector(selectPodcastDetail);
  const status = useSelector(selectStatus);
  const isLoading = status === Status.FetchingData;
  const fetchingFailed = status === Status.ServiceFailed;

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(activateStatus(Status.FetchingData));
        const resultAction = await dispatch(fetchPodcastDetail(podcastId));
        const episodes = unwrapResult(resultAction);
        dispatch(activateStatus(null));
        return episodes;
      } catch (error) {
        console.log(`${SERVICE_ERROR}: fetching podcast's detail`);
        dispatch(activateStatus(Status.ServiceFailed));
      }
    }
    retrieveData(podcastId, fetchData, (data: Episode[] | Episode[]) => dispatch(initialize(data)));
  }, [episodeId, podcastId]);

  return [{ episodes: data.episodes, isLoading, fetchingFailed }];
};

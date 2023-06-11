import { configureStore } from "@reduxjs/toolkit";
import { Podcast } from "../models/models";
import { podcastDetailReducer } from "./slices/podcast-detail";
import { podcastReducer } from "./slices/podcasts";
import { StatusReducer } from "./slices/status";

export interface State {
  podcasts: Podcast[];
}

const store = configureStore({
  reducer: {
    podcasts: podcastReducer,
    podcastDetail: podcastDetailReducer,
    StatusReducer: StatusReducer,
  },
});

export const selectEpisode = (episodeId: string) => (state: RootState) =>
  state.podcastDetail.episodes.find((item) => item.id.toString() === episodeId);
export const selectPodcasts = (state: RootState) => state.podcasts;
export const selectPodcastDetail = (state: RootState) => state.podcastDetail;
export const selectStatus = (state: RootState) => state.StatusReducer;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;

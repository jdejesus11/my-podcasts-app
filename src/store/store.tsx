import { configureStore } from "@reduxjs/toolkit";
import {Podcast} from "../models/models";
import { isLoadingReducer } from "./slices/is-loading";
import { podcastDetailReducer } from "./slices/podcast-detail";
import { podcastReducer } from "./slices/podcasts";

export interface State {
    podcasts: Podcast[],
}

const store = configureStore({
    reducer: {
        podcasts: podcastReducer,
        podcastDetail: podcastDetailReducer,
        isLoading: isLoadingReducer
    }
})

export const selectPodcasts = (state:RootState) => state.podcasts;
export const selectPodcastDetail = (state:RootState) => state.podcastDetail;
export const selectIsLoading = (state:RootState) => state.isLoading;
export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch;
export default store;
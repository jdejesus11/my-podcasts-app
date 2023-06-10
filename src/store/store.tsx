import { configureStore } from "@reduxjs/toolkit";
import {Podcast} from "../models/models";
import { podcastReducer } from "./slices/podcasts";

export interface State {
    podcasts: Podcast[],
}

const store = configureStore({
    reducer: {
        podcasts: podcastReducer
    }
})

export const selectPodcasts = (state:RootState) => state.podcasts;
export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch;
export default store;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fromContentToPodcasts } from "../../helpers/mappers";
import { Podcast } from "../../models/models";
import { fetchMostRelevantPodcastService } from "../../services/podcasts";

export  interface PodcastSlice {
    podcasts: Podcast[]
}

export const podcastsInitialState: PodcastSlice = {
    podcasts: []
}

export const fetchMostRelevantPodcast = createAsyncThunk('', async () => {
    const response = await fetchMostRelevantPodcastService()
    const podcasts = fromContentToPodcasts(response);
    return podcasts;
})

export const podcastsSlice = createSlice({
    name: "podcasts",
    initialState: podcastsInitialState,
    reducers: {
        initialize: (state, action: PayloadAction<Podcast[]>) => {
            state.podcasts = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMostRelevantPodcast.fulfilled, (state, action) => {
            state.podcasts = action.payload ?? [];
        })
    }
})

export const { initialize } = podcastsSlice.actions;
export const podcastReducer = podcastsSlice.reducer;
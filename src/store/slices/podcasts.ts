import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SERVICE_ERROR } from "../../helpers/constants";
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
    return fromContentToPodcasts(response);
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
        }).addCase(fetchMostRelevantPodcast.rejected, (state) => {
            console.log(`${SERVICE_ERROR}: fetching most relevant podcasts`)
            state.podcasts = [];
        })
    }
})

export const { initialize } = podcastsSlice.actions;
export const podcastReducer = podcastsSlice.reducer;
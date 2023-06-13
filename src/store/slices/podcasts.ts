import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHourBetweenMiliseconds } from "../../helpers/helpers";
import { Podcast } from "../../models/models";
import { fetchMostRelevantPodcastService } from "../../services/podcasts";
import { fetchAndStoragePodcasts, fetchDataFromStorage, LIMIT_IN_HOURS, PODCASTS_STORAGE_KEY } from "../../storage/storageAPI";

export  interface PodcastSlice {
    podcasts: Podcast[]
}

export const podcastsInitialState: PodcastSlice = {
    podcasts: []
}

export const fetchMostRelevantPodcast = createAsyncThunk('', async () => {
    const storagedPodcasts = fetchDataFromStorage(PODCASTS_STORAGE_KEY)

    if (!storagedPodcasts){
        return fetchAndStoragePodcasts(PODCASTS_STORAGE_KEY, fetchMostRelevantPodcastService);
    }

    const { createdAt, data } = storagedPodcasts;
    const currentTime = Date.now();
    const hours = getHourBetweenMiliseconds(currentTime, createdAt);
    if (hours >= LIMIT_IN_HOURS) {
        return fetchAndStoragePodcasts(PODCASTS_STORAGE_KEY, fetchMostRelevantPodcastService);
    }
    
    return data as Podcast[];
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
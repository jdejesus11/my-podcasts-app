import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SERVICE_ERROR } from "../../helpers/constants";
import { fromContentToEpisodes } from "../../helpers/mappers";
import { Episode } from "../../models/models";
import { fetchPodcastDetailService } from "../../services/podcast-detail";

export interface PodcastDetailSlice {
  episodes: Episode[] | null;
}

export const podcastDetailInitialState: PodcastDetailSlice = {
  episodes: null,
};

export const fetchPodcastDetail = createAsyncThunk("", async (podcastId: string) => {
  const response = await fetchPodcastDetailService(podcastId);
  return fromContentToEpisodes(response);
});

export const podcastSlice = createSlice({
  name: "podcast",
  initialState: podcastDetailInitialState,
  reducers: {
    initialize: (state, action: PayloadAction<Episode[]>) => {
      state.episodes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcastDetail.fulfilled, (state, action) => {
        state.episodes = action.payload ?? [];
      })
  },
});

export const { initialize } = podcastSlice.actions;
export const podcastDetailReducer = podcastSlice.reducer;

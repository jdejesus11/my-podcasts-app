import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHourBetweenMiliseconds } from "../../helpers/helpers";
import { Episode } from "../../models/models";
import { fetchPodcastDetailService } from "../../services/podcast-detail";
import { fetchAndStoragePodcastDetail, fetchDataFromStorage, LIMIT_IN_HOURS } from "../../storage/storageAPI";

export interface PodcastDetailSlice {
  episodes: Episode[] | null;
}

export const podcastDetailInitialState: PodcastDetailSlice = {
  episodes: null,
};

export const fetchPodcastDetail = createAsyncThunk("", async (podcastId: string) => {

  const storagedPodcastDetail = fetchDataFromStorage(podcastId)
  if (!storagedPodcastDetail){
    return fetchAndStoragePodcastDetail(podcastId, () => fetchPodcastDetailService(podcastId));
  }

  const { createdAt, data } = storagedPodcastDetail;
  const currentTime = Date.now();
  const hours = getHourBetweenMiliseconds(currentTime, createdAt);
  if (hours >= LIMIT_IN_HOURS) {
      return fetchAndStoragePodcastDetail(podcastId, () => fetchPodcastDetailService(podcastId));
  }
  
  return data as Episode[];
});

export const podcastSlice = createSlice({
  name: "podcast",
  initialState: podcastDetailInitialState,
  reducers: {
    initialize: (state, action: PayloadAction<Episode[] | null>) => {
      state.episodes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPodcastDetail.fulfilled, (state, action) => {
      state.episodes = action.payload ?? [];
    });
  },
});

export const { initialize } = podcastSlice.actions;
export const podcastDetailReducer = podcastSlice.reducer;

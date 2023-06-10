import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Status {
  "ServiceFailed" = "ServiceFailed",
  "FetchingData" = "FetchingData",
}

const initialState: Status = null;

export const statusSlice = createSlice({
  name: "status",
  initialState: initialState,
  reducers: {
    activateStatus: (__, action: PayloadAction<Status>) => {
      return action.payload;
    },
  },
});

export const { activateStatus } = statusSlice.actions;
export const StatusReducer = statusSlice.reducer;

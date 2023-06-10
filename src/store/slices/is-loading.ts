import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
    name: "isLoading",
    initialState: false,
    reducers: {
        activateLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        }
    }
})

export const { activateLoading } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;
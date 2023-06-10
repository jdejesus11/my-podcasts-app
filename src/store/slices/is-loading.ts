import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
    name: "is-loading",
    initialState: false,
    reducers: {
        activateLoading: (state, action: PayloadAction<boolean>) => {
            state = action.payload;
        }
    }
})

export const { activateLoading } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;
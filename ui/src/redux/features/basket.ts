import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  [id: string]: number;
}

const initialState: IInitialState = {};

const basketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    updateCount(
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        count: number;
      }>
    ) {
      if (!payload.count) delete state[payload.id];
      else state[payload.id] = payload.count;
    },
  },
});

export const { updateCount } = basketSlice.actions;

export default basketSlice.reducer;

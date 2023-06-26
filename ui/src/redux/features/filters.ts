import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  title: string;
  genre: string | null;
  cinema: string | null;
}

const initialState: IInitialState = {
  title: "",
  cinema: null,
  genre: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTitle(state, { payload }: PayloadAction<string>) {
      state.title = payload;
    },
    setGenre(state, { payload }: PayloadAction<string | null>) {
      state.genre = payload;
    },
    setCinema(state, { payload }: PayloadAction<string | null>) {
      state.cinema = payload;
    },
  },
});

export const { setTitle, setCinema, setGenre } = filtersSlice.actions;

export default filtersSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import filters from "./features/filters";
import basket from "./features/basket";

import { movieApi } from "./services/movieApi";

export const store = configureStore({
  reducer: {
    filters,
    basket,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

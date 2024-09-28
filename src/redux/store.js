import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import { podcastSlice } from "./features/podcast/podcastSlice";
import { blogtSlice } from "./features/blog/blogSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [podcastSlice.reducerPath]: apiSlice.reducer,
    [blogtSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

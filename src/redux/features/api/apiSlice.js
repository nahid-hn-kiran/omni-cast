import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "omniCastApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://omni-cast-server.vercel.app/api/v1",
  }),
  tagTypes: ["Podcast", "Blog", "Auth"],
  endpoints: () => ({}),
});

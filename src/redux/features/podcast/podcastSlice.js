import { apiSlice } from "../api/apiSlice";

export const podcastSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPodcast: builder.query({
      query: () => "/podcasts",
      providesTags: ["Podcast"],
    }),
    getSinglePodcast: builder.query({
      query: (id) => `/podcast/${id}`,
    }),
  }),
});

export const { useGetAllPodcastQuery, useGetSinglePodcastQuery } = podcastSlice;

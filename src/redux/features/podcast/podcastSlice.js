import { apiSlice } from "../api/apiSlice";

export const podcastSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPodcast: builder.mutation({
      query: (podcast) => ({
        url: "/podcasts",
        method: "POST",
        body: podcast,
      }),
      invalidatesTags: "Podcast",
    }),
    getAllPodcast: builder.query({
      query: () => "/podcasts",
      providesTags: ["Podcast"],
    }),
    getSinglePodcast: builder.query({
      query: (id) => `/podcast/${id}`,
    }),
    deletePodcast: builder.mutation({
      query: (id) => ({
        url: `/podcast/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Podcast"],
    }),
    updatePodcast: builder.mutation({
      query: ({ id, updatedPodcast }) => ({
        url: `/podcast/${id}`,
        method: "PUT",
        body: updatedPodcast,
      }),
      invalidatesTags: ["Podcast"],
    }),
  }),
});

export const {
  useAddPodcastMutation,
  useGetAllPodcastQuery,
  useGetSinglePodcastQuery,
  useDeletePodcastMutation,
  useUpdatePodcastMutation,
} = podcastSlice;

import { apiSlice } from "../api/apiSlice";

export const blogtSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllblog: builder.query({
      query: () => "/blogs",
      providesTags: ["Blog"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
  }),
});

export const { useGetAllblogQuery, useGetSingleBlogQuery } = blogtSlice;

import { apiSlice } from "../api/apiSlice";

export const blogtSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: "Blog",
    }),
    getAllblog: builder.query({
      query: () => "/blogs",
      providesTags: ["Blog"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
  }),
});

export const {
  useAddNewBlogMutation,
  useGetAllblogQuery,
  useGetSingleBlogQuery,
} = blogtSlice;

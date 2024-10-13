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
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, updatedBlog }) => ({
        url: `/blog/${id}`,
        method: "PUT",
        body: updatedBlog,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useAddNewBlogMutation,
  useGetAllblogQuery,
  useGetSingleBlogQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogtSlice;

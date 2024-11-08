import { apiSlice } from "../api/apiSlice";

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/user",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: user,
      }),
    }),
    getAllUsers: builder.query({
      query: () => "/user",
      providesTags: ["Auth"],
    }),
    getSingleUser: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ["Auth"],
    }),
    getUserProfile: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/users/profile",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        };
      },
      providesTags: ["Auth"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Auth"],
    }),
    updateUser: builder.mutation({
      query: ({ id, updatedUser }) => ({
        url: `user/${id}`,
        method: "PUT",
        body: updatedUser,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetSingleUserQuery,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,
} = authSlice;

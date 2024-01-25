import { getToken } from "@/helper/tokenHelper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "buyerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4400/api/v1/",
        // prepareHeaders: (headers, { getState }) => {
        //     if (true) {
        //         headers.set("Authorization", `Bearer ${getToken()}`);
        //     }
        //     return headers;
        // },
    }),
    tagTypes: ["user"],

    userLogin: builder.mutation({
        query: () => ({
            url: "user/login",
            method: "POST",
            body: user
        }),
        invalidatesTags: ["user"]
    }),

    userOTP: builder.mutation({
        query: () => ({
            url: "user/generate-otp",
            method: "POST",
            body: user
        }),
        invalidatesTags: ["user"]
    }),

    userResetPassword: builder.mutation({
        query: () => ({
            url: "user/reset-password",
            method: "POST",
            body: user
        }),
        invalidatesTags: ["user"]
    }),


})


export const { useUserLoginMutation, useUserOTPMutation, useUserResetPasswordMutation } = userApi
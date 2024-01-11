import { getToken } from "@/helper/tokenHelper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const buyerApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4400/api/v1/",
        prepareHeaders: (headers, { getState }) => {
            if (true) {
                headers.set("Authorization", `Bearer ${getToken()}`);
            }
            return headers;
        },
    }),
    tagTypes: ["buyer"],

    endpoints: (builder) => ({
        fetchBuyers: builder.query({
            query: () => "buyer/list-buyer",
            providesTags: ["buyer"],
            transformResponse: (res) => {
                return res.result
            }
        }),

        addBuyer: builder.mutation({
            query: () => ({
                url: "buyer/create-buyer",
                method: "POST",
                body: seller
            }),
            invalidatesTags: ["buyer"]
        }),

        deleteBuyer: builder.mutation({
            query: (id) => ({
                url: `buyer/delete-buyer/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["buyer"]
        }),
    })
})

export const { useFetchBuyersQuery, useAddBuyerMutation, useDeleteBuyerMutation } = buyerApi
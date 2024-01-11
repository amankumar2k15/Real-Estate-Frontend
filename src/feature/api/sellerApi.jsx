import { getToken } from "@/helper/tokenHelper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const sellerApi = createApi({
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
    tagTypes: ["seller"],

    endpoints: (builder) => ({
        fetchSellers: builder.query({
            query: () => "seller/list-seller",
            providesTags: ["seller"],
            transformResponse: (res) => {
                console.log("inside seller api ", res)
                return res.result
            }
        }),

        addSeller: builder.mutation({
            query: (seller) => ({
                url: "seller/create-seller",
                method: "POST",
                body: seller
            }),
            invalidatesTags: ["seller"]
        }),

        deleteSeller: builder.mutation({
            query: (id) => ({
                url: `seller/delete-seller/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["seller"]
        }),


    }),
})



export const { useFetchSellersQuery, useAddSellerMutation, useDeleteSellerMutation } = sellerApi



















import { getToken } from "@/helper/tokenHelper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const sellerApi = createApi({
    reducerPath: "sellerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4400/api/v1/",
        // baseUrl: "http://bharat-escrow-real-state-api.onrender.com/api/v1/",
        prepareHeaders: (headers, { getState }) => {
            if (true) {
                console.log("amanToken==>", getToken())
                headers.set("Authorization", `Bearer ${getToken()}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Seller"],

    endpoints: (builder) => ({
        fetchSellers: builder.query({
            query: () => "seller/list-seller",
            providesTags: ["Seller"],
            transformResponse: (response) => {
                console.log("response in sellerAPI listSeller", response)
                return response.result
            },
            // merge: (existingData, newData) => [...existingData, ...newData],
        }),

        addSeller: builder.mutation({
            query: (seller) => ({
                url: "seller/create-seller",
                method: "POST",
                body: seller
            }),
            invalidatesTags: ["Seller"]
        }),

        deleteSeller: builder.mutation({
            query: (id) => ({
                url: `seller/delete-seller/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Seller"]
        }),


    }),
})



export const { useFetchSellersQuery, useAddSellerMutation, useDeleteSellerMutation } = sellerApi



















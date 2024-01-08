import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4400/api/v1/",
        prepareHeaders: (headers, { getState }) => {
            // Get the authentication token from your state
            const token = getState().user.token;

            // If a token exists, include it in the headers
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchSellers: builder.query({
            query: () => "seller/list-seller"
        }),
    })
})

export const { useFetchSellersQuery } = api



















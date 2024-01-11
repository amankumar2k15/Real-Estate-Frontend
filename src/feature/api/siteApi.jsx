import { getToken } from "@/helper/tokenHelper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const siteApi = createApi({
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
    tagTypes: ["site"],

    endpoints: (builder) => ({
        fetchSites: builder.query({
            query: () => "site/list-site",
            providesTags: ["site"],
            transformResponse: (res) => {
                console.log("inside site api ", res)
                return res.result
            }
        }),

        addSite: builder.mutation({
            query: (site) => ({
                url: "site/create-site",
                method: "POST",
                body: site
            }),
            invalidatesTags: ["site"]
        }),

        // deleteSite: builder.mutation({
        //     query: (id) => ({
        //         url: `site/delete-site/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["site"]
        // }),


    }),
})



export const { useFetchSitesQuery, useAddSiteMutation } = siteApi



















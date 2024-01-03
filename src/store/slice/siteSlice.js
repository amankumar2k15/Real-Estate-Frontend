import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchSiteData = createAsyncThunk("data/fetchSiteData", async () => {
    // Api call over here
})

const siteSlice = createSlice({
    name: "site",
    initialState: {
        data: {
            site_name: null,
            site_image: null,
            site_location: null,
            site_description: null,
            block: null,
            flat_name: null,
            flat_image: null,
            flat_type: null
        },
        isIndividualOpen: false
    },
    reducers: {
        setFormValue: (state, action) => {
            if (action.payload.type === "fill") {
                const { key, value } = action.payload.data
                state.data[key] = value;
            } else {
                state.data = action.payload.data
            }
        },
        setIndividualOpen: (state, action) => {
            state.isIndividualOpen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSiteData.pending, (state, action) => {
                state.data = []
            })
            .addCase(fetchSiteData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchSiteData.rejected, (state, action) => {
                state.data = []
            })
    }
})


export const { setFormValue, setIndividualOpen } = siteSlice.actions
export default siteSlice.reducer;
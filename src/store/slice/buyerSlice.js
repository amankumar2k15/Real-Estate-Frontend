import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchBuyerData = createAsyncThunk("data/fetchBuyerData", async () => {
    // Api call over here
})

const buyerSlice = createSlice({
    name: "buyer",
    initialState: {
        data: {
            fullName: null,
            email: null,
            phone: null,
            city: null,
            state: null,
            pincode: null,
            address: null,
            location: null,
            adhaar: null,
            pan: null,
            blankCheque: null,
            source_of_fund: null,
            siteId: null
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
            .addCase(fetchBuyerData.pending, (state, action) => {
                state.data = []
            })
            .addCase(fetchBuyerData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchBuyerData.rejected, (state, action) => {
                state.data = []
            })
    }

})


export const { setFormValue, setIndividualOpen } = buyerSlice.actions
export default buyerSlice.reducer;
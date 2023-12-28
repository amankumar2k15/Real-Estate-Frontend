import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchBuyerData = createAsyncThunk("data/fetchBuyerData", async () => {
    // Api call here 
})

const buyerSlice = createSlice({
    name: "buyer",
    initialState: {
        data: []
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


export const { } = buyerSlice.actions
export default buyerSlice.reducer
import { createAsyncThunk } from "@reduxjs/toolkit"

const buyerSlice = createSlice({
    name: "buyer",
    initialState: {
        data: []
    },
    extraReducers: {
        [fetchBuyerData.pending]: (state, action) => {
            state.data = []
        },
        [fetchBuyerData.fulfilled]: (state, action) => {
            state.data = action.payload
        },
        [fetchBuyerData.rejected]: (state, action) => {
            state.data = []
        },
    }
})

export const fetchBuyerData = createAsyncThunk("data/fetchBuyerData", async () => {
    // Api call here 
})


export const { } = buyerSlice.actions
export default buyerSlice.reducer
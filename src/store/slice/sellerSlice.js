import { createAsyncThunk } from "@reduxjs/toolkit"

const sellerSlice = createSlice({
    name: "seller",
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSellerData.pending, (state, action) => {
                state.data = []
            })
            .addCase(fetchSellerData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchSellerData.rejected, (state, action) => {
                state.data = []
            })
    }

})

export const fetchSellerData = createAsyncThunk("data/fetchSellerData", async () => {
    // Api call over here
})


export const { } = sellerSlice.actions
export default sellerSlice.reducer;
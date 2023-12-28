import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUserData = createAsyncThunk("data/fetchUserData", async () => {
    // Api call over here
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        role: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state, action) => {
                state.data = []
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.data = []
            })
    }

})



export const { } = userSlice.actions
export default userSlice.reducer;
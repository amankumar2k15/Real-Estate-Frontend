import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const dashboardSlice = createSlice({
    name: dashboard,
    initialState: {
        data: []
    },
    extraReducers: {
        [fetchDashboardData.pending]: (state, action) => {
            state.data = []
        },
        [fetchDashboardData.fulfilled]: (state, action) => {
            state.data = action.payload
        },
        [fetchDashboardData.rejected]: (state, action) => {
            state.data = []
        }
    }


})

//APi calls
export const fetchDashboardData = createAsyncThunk("data/fetchDashboardData", async () => {
    // Api call over here for dashboardData 
})


export const { } = dashboardSlice.actions
export default dashboardSlice.reducer

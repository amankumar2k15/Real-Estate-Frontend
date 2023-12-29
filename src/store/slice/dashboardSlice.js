import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//APi calls
export const fetchDashboardData = createAsyncThunk("data/fetchDashboardData", async () => {
    // Api call over here for dashboardData 
})

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        data: [],
        tabeData: []
    },
    reducers: {
        setTableData: (state, action) => {
            console.log("action ==================", action);
            state.tabeData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.pending, (state, action) => {
                state.data = []
            })
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.data = []
            });
    }


})



export const { setTableData } = dashboardSlice.actions
export default dashboardSlice.reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//APi calls
export const fetchDashboardData = createAsyncThunk("data/fetchDashboardData", async () => {
    // Api call over here for dashboardData 
})

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        sellerCount: 0,
        buyerCount: 0,
        siteCount: 0,
        data: [],
        tableData: [],
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setSellerCount: (state, action) => {
            state.sellerCount = action.payload
        },
        setBuyerCount: (state, action) => {
            state.buyerCount = action.payload
        },
        setSiteCount: (state, action) => {
            state.siteCount = action.payload
        },

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



export const { setTableData, setSiteCount, setSellerCount, setBuyerCount } = dashboardSlice.actions
export default dashboardSlice.reducer

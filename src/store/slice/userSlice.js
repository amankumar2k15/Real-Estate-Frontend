import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUserData = createAsyncThunk("data/fetchUserData", async () => {
    // Api call over here
})


const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {
            username: "John Doe",
        },
        role: "buyer"
    },
    reducers: {
        resetUser: () => initialState,

        setUserDetail: (state, action) => {
            state.data = action.payload;
        },
        setUserName: (state, action) => {
            state.data.username = action.payload;
        },
        setUserRole: (state, action) => {
            state.role = action.payload;
        }
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



export const { setUserDetail, setUserRole, setUserName, resetUser } = userSlice.actions
export default userSlice.reducer;
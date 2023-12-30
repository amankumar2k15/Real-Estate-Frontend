import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUserData = createAsyncThunk("data/fetchUserData", async () => {
    // Api call over here
})


const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {
            _id: "",
            username: "John Doe",
            googleId: "",
            email: "Alex Motes",
            phone: 9999889900,
            profile: "",
            role: "user",
        },
        role: "user"
    },
    reducers: {
        setUserDetail: (state, action) => {
            state.data = action.payload;
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



export const { setUserDetail , setUserRole } = userSlice.actions
export default userSlice.reducer;
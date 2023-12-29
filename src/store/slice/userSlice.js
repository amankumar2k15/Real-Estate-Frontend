import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUserData = createAsyncThunk("data/fetchUserData", async () => {
    // Api call over here
})



const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {
            _id: "",
            username: "user",
            googleId: "",
            email: "Alex Motes",
            phone: 9999889900,
            profile: "https://lh3.googleusercontent.com/a/ACg8ocI5WML1iSWIxTXrm4OduR3M0v_kQvM6ep8-DvBs_yCLPnh2=s96-c",
            role: "user",
        },
        role: "user"
    },
    reducers: {
        setUserDetail: (state, action) => {
            console.log("reaching inside store");
            state.data = action.payload;
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



export const { setUserDetail } = userSlice.actions
export default userSlice.reducer;
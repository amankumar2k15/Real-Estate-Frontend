import { createSlice } from "@reduxjs/toolkit"


const headerSlice = createSlice({
    name: "header",
    initialState: {
        tab: null,
        url: "/dashboard/home",
        search: null
    },
    reducers: {
        setHeaderDetails: (state, action) => {
            // console.log(action.payload, "reaching inside store");
            state = action.payload;
        },
        setSearch: (state, action) => {
            // console.log(action.payload, "reaching inside store");
            state.search = action.payload;
        }
    }
})



export const { setHeaderDetails, setSearch } = headerSlice.actions
export default headerSlice.reducer;
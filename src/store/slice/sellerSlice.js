import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchSellerData = createAsyncThunk("data/fetchSellerData", async () => {
    // Api call over here
})

const sellerSlice = createSlice({
    name: "seller",
    initialState: {
        data: {
            fullName: null,
            email: null,
            phone: null,
            address: null,
            companyName: null,
            location: null,
            state: null,
            city: null,
            pincode: null,
            adhaar: null,
            companyPan: null,
            blankCheque: null,
            certificate_of_incorporate: null,
        },
        isIndividualOpen: false,
        sellerData: [],
    },
    reducers: {
        setSellerData: (state, action) => {
            state.sellerData = action.payload
        },
        setFormValue: (state, action) => {
            if (action.payload.type === "fill") {
                const { key, value } = action.payload.data
                state.data[key] = value;
            } else {
                state.data = action.payload.data
            }
        },
        setIndividualOpen: (state, action) => {
            state.isIndividualOpen = action.payload
        }
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


export const { setFormValue, setIndividualOpen } = sellerSlice.actions
export default sellerSlice.reducer;
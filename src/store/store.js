import dashboardReducer from "./slice/dashboardSlice";
import sellerReducer from "./slice/sellerSlice";
import buyerReducer from "./slice/buyerSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import headerReduce from "./slice/headerSlice";
import siteReducer from "./slice/siteSlice";
import { api } from "./api/sellerApi";



const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    seller: sellerReducer,
    buyer: buyerReducer,
    user: userReducer,
    header: headerReduce,
    site: siteReducer,
    [api.reducerPath]: api.reducer,
})


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        // getDefaultMiddleware({
        //     serializableCheck: false,
        // })
        getDefaultMiddleware().concat(api.middleware),
})

export default store

























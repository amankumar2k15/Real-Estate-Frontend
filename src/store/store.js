import dashboardReducer from "./slice/dashboardSlice";
import sellerReducer from "./slice/sellerSlice";
import buyerReducer from "./slice/buyerSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import headerReduce from "./slice/headerSlice";
import siteReducer from "./slice/siteSlice";
import { buyerApi } from "@/feature/api/buyerApi";
import { siteApi } from "@/feature/api/siteApi";
import { sellerApi } from "@/feature/api/sellerApi";



const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    seller: sellerReducer,
    buyer: buyerReducer,
    user: userReducer,
    header: headerReduce,
    site: siteReducer,
    [sellerApi.reducerPath]: sellerApi.reducer,
    [buyerApi.reducerPath]: buyerApi.reducer,
    [siteApi.reducerPath]: siteApi.reducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: true,
    }).concat(sellerApi.middleware, buyerApi.middleware, siteApi.middleware),
});

export default store

























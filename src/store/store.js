import dashboardReducer from "./slice/dashboardSlice";
import sellerReducer from "./slice/sellerSlice";
import buyerReducer from "./slice/buyerSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    seller: sellerReducer,
    buyer: buyerReducer,
    user: userReducer,
})


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export default store

























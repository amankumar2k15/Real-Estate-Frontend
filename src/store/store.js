import dashboardReducer from "./slice/dashboardSlice";
import sellerReducer from "./slice/sellerSlice";
import buyerReducer from "./slice/buyerSlice";
const { configureStore, combineReducers } = require("@reduxjs/toolkit");


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    seller: sellerReducer,
    buyer: buyerReducer,
})


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export default store

























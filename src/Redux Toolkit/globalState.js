import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetures/Auth/authSlice.js";
import  userReducer  from "./fetures/User/userSlice.js";
import customerReducer from "./fetures/Customer/customerSlice.js";
import orderReducer from "./fetures/Order/orderSlice.js";

const globalState = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        customer: customerReducer,
        order: orderReducer,


    }
})

export default globalState;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetures/Auth/authSlice.js";
import  userReducer  from "./fetures/User/userSlice.js";
import customerReducer from "./fetures/Customer/customerSlice.js";
import orderReducer from "./fetures/Order/orderSlice.js";
import refundReducer from "./fetures/Refund/refundSlice.js";
import shiftReportReducer from "./fetures/ShiftReport/shiftReportSlice.js";

const globalState = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        customer: customerReducer,
        order: orderReducer,
        refund: refundReducer,
        shiftReport: shiftReportReducer,

    }
})

export default globalState;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetures/Auth/authSlice.js";
import  userReducer  from "./fetures/User/userSlice.js";
import customerReducer from "./fetures/Customer/customerSlice.js";
import orderReducer from "./fetures/Order/orderSlice.js";
import refundReducer from "./fetures/Refund/refundSlice.js";
import shiftReportReducer from "./fetures/ShiftReport/shiftReportSlice.js";
import branchReducer from "./fetures/Branch/branchSlice.js";
import categoryReducer from "./fetures/Category/categorySlice.js";
import employeeReducer from "./fetures/Employee/employeeSlice.js";
import storeReducer from "./fetures/Store/storeSlice.js";
import productReducer from "./fetures/Product/productSlice.js";


const globalState = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        customer: customerReducer,
        order: orderReducer,
        refund: refundReducer,
        shiftReport: shiftReportReducer,
        branch: branchReducer,
        category: categoryReducer,
        employee: employeeReducer,
        store: storeReducer,
        product: productReducer,

    }
})

export default globalState;
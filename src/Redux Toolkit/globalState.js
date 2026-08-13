import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./fetures/Auth/authSlice.js";
import { userReducer } from "./fetures/User/userSlice.js";

const globalState = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,


    }
})

export default globalState;
import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../features/authSlice"



export const store=configureStore({
    reducer:{
     app:authSlice,
    }
})
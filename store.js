import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./todoslice";
export const store=configureStore({
    reducer:{
        task:todoslice
    }
})
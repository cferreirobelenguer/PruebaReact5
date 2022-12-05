import { configureStore } from "@reduxjs/toolkit";
import { counterApp } from "./slices/counter";

export const store=configureStore({
    reducer:{
        counter:counterApp.reducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import { Reducerfun } from "./reducer";

export const Store = configureStore({
    reducer:{
        count: Reducerfun
    }
})
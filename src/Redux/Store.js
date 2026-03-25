import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Redux/slices/theme"
import ProductReducer from "./Thunks/Thunks";

export const store = configureStore({
    reducer:{
        theme:  themeReducer,
        products: ProductReducer,
    },
})
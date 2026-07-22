import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./slices/themeSlice"
import ProductReducer from "./Thunks/Thunks";
import cartReducer from "./Thunks/Addproducts";

export const Store = configureStore({
    reducer:{
        theme:  themeSliceReducer,
        products: ProductReducer,
        cart: cartReducer
    },
})
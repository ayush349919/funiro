import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const response = await axios.get('https://dummyjson.com/products')
    return response.data.products;

})

const productSlice = createSlice({
    name: 'Products',
    initialState: { items: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = 'failed';
            });
    }
})

export default productSlice.reducer;
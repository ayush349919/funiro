import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "addtoCart",
    initialState: {
        cartitems: [],
        totalquantity: 0,
        totalprice : 0
    },
    reducers: {
        addtoCart: (state, action) => {
            const newitem = action.payload
            const existingItem = state.cartitems.find(item => item.id === newitem.id);
            state.totalquantity++
            state.totalprice += newitem.price
            if (!existingItem) {
                state.cartitems.push({ ...newitem, quantity: 1 })
            } else {
                existingItem.quantity++;
            }
        },
        increment: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartitems.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++
                state.totalquantity++
                state.totalprice += existingItem.price;
            }
        },
        decrement: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartitems.find(item => item.id === id);
            if(existingItem.quantity === 1){
                state.cartitems= state.cartitems.filter(item => item.id !== id)
            }else{
                existingItem.quantity --
            }
            state.totalquantity--;
            state.totalprice -= existingItem.price

        },
    }
})

export const { addtoCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
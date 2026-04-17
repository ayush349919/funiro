import { createSlice } from "@reduxjs/toolkit";

const getSavedCart = () => {
    try {
        const savedData = localStorage.getItem("cart");
        return savedData ? JSON.parse(savedData) : { cartitems: [], totalquantity: 0, totalprice: 0 };
    } catch (error) {
        console.log(error);
        return { cartitems: [], totalquantity: 0, totalprice: 0 };
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState: getSavedCart(), 
    reducers: {
        addtoCart: (state, action) => {
            const newitem = action.payload;
            const existingItem = state.cartitems.find(item => item.id === newitem.id);
            
            state.totalquantity++;
            state.totalprice += newitem.price;

            if (!existingItem) {
                state.cartitems.push({ ...newitem, quantity: 1 });
            } else {
                existingItem.quantity++;
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        increment: (state, action) => {
            const id = action.payload;
            const item = state.cartitems.find(i => i.id === id);
            if (item) {
                item.quantity++;
                state.totalquantity++;
                state.totalprice += item.price;
                localStorage.setItem("cart", JSON.stringify(state));
            }
        },
        decrement: (state, action) => {
            const id = action.payload;
            const item = state.cartitems.find(i => i.id === id);
            if (item) {
                state.totalquantity--;
                state.totalprice -= item.price;
                if (item.quantity === 1) {
                    state.cartitems = state.cartitems.filter(i => i.id !== id);
                } else {
                    item.quantity--;
                }
                localStorage.setItem("cart", JSON.stringify(state));
            }
        },
        reset: (state, action) => {
            const id = action.payload;
            const item = state.cartitems.find(i => i.id === id);
            if (item) {
                state.totalquantity -= item.quantity;
                state.totalprice -= (item.price * item.quantity);
                state.cartitems = state.cartitems.filter(i => i.id !== id);
                localStorage.setItem("cart", JSON.stringify(state));
            }
        }
    }
});

export const { addtoCart, increment, decrement, reset } = cartSlice.actions;
export default cartSlice.reducer;

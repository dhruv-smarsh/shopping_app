import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
   name: 'ProductCart',
    initialState: {
       open: false,
        name: 'test',
        products: []
    },

    reducers:{
       addToCart: (state, action) => {
           // state.open = action.payload;
            let ProductsData:any = state.products;
           ProductsData.push(action.payload);
           state.products = ProductsData
           // return { ...state, open:true, products: ProductsData };
       }
    }
});
export const { addToCart } = cart.actions;

export default cart.reducer


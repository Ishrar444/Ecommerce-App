import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartitem: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartitem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      
      const newItem = {
        ...action.payload,
        quantity: 1, 
      };
      state.cartitem.push(newItem);
    },
   
    deleteFromCart: (state, action) => {
      state.cartitem = state.cartitem.filter(item => item.id !== action.payload);
    },
    
    increment: (state, action) => {
      const item = state.cartitem.find(item => item.id === action.payload);
     item.quantity++; 
    
      
    },
    decrement: (state, action) => {
      const item = state.cartitem.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});


export const { addToCart, deleteFromCart,increment,decrement} = cartSlice.actions

export default cartSlice.reducer
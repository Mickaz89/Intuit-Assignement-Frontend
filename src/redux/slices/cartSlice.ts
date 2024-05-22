import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item, Product } from '../../types'

interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  phoneNumber: string;
}

interface CartState {
  items: Item[]
  counter: number,
  shippingInfo: ShippingInfo | null;
}

const initialState: CartState = {
  items: [],
  counter: 0,
  shippingInfo: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      // Check if the item is already in the cart
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item is already in the cart, increment the quantity
        existingItem.quantity += 1;
        // Update the total
        existingItem.total = existingItem.price * existingItem.quantity;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price, // Since quantity is 1, total is equal to the price
        });
      }
      state.counter += 1;
    },
    incrementItem: (state, action: PayloadAction<number>) => {
      // Find the item in the cart
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem) {
        // If the item is in the cart, increment the quantity
        existingItem.quantity += 1;
        // Update the total
        existingItem.total = existingItem.price * existingItem.quantity;
        // Update the counter
        state.counter += 1;
      }
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      // Find the item in the cart
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem && existingItem.quantity > 0) {
        // If the item is in the cart and the quantity is greater than 0, decrement the quantity
        existingItem.quantity -= 1;
        // Update the total
        existingItem.total = existingItem.price * existingItem.quantity;
        // Update the counter
        state.counter -= 1;
      }
      // If the quantity is 0, remove the item from the cart
      if (existingItem && existingItem.quantity === 0) {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    setShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
      state.shippingInfo = action.payload;
    },
  },
});

export const { addItem , incrementItem, decrementItem, setShippingInfo} = cartSlice.actions

export default cartSlice.reducer
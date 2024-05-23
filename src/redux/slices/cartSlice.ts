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
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        updateItem(existingItem, 1);
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
      state.counter += 1;
    },
    incrementItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem) {
        updateItem(existingItem, 1);
        state.counter += 1;
      }
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem && existingItem.quantity > 0) {
        updateItem(existingItem, -1);
        state.counter -= 1;
      }

      if (existingItem && existingItem.quantity === 0) {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    setShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
      state.shippingInfo = action.payload;
    },
    resetCart: (state) => {
      state.items = [];
      state.counter = 0;
      state.shippingInfo = null;
    }
  },
});

const updateItem = (item: Item, quantityChange: number) => {
  item.quantity += quantityChange;
  item.total = item.price * item.quantity;
};

export const { addItem , incrementItem, decrementItem, setShippingInfo, resetCart} = cartSlice.actions

export default cartSlice.reducer
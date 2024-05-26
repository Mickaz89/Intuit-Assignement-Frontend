import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item, Product } from '../../types'

interface ShippingInfo {
  name: string ;
  address: string;
  city: string;
  phoneNumber: string;
}

interface CartState {
  items: Item[]
  counter: number,
  shippingInfo: ShippingInfo | null;
  total: number
}

const initialState: CartState = {
  items: [],
  counter: 0,
  shippingInfo: null,
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);

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
      state.total = calculateTotal(state.items);
    },
    incrementItem: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item._id === action.payload);

      if (existingItem) {
        updateItem(existingItem, 1);
        state.counter += 1;
      }
      state.total = calculateTotal(state.items);
    },
    decrementItem: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item._id === action.payload);

      if (existingItem && existingItem.quantity > 0) {
        updateItem(existingItem, -1);
        state.counter -= 1;
      }

      if (existingItem && existingItem.quantity === 0) {
        state.items = state.items.filter(item => item._id !== action.payload);
      }
      state.total = calculateTotal(state.items);
    },
    setShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
      const processedShippingInfo = Object.entries(action.payload).map(([key, value]) => [key, value === '' ? null : value])
      state.shippingInfo = Object.fromEntries(processedShippingInfo);
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

const calculateTotal = (items: Item[]) => {
  return items.reduce((total, item) => total + item.total, 0);
};

export const { addItem , incrementItem, decrementItem, setShippingInfo, resetCart} = cartSlice.actions

export default cartSlice.reducer
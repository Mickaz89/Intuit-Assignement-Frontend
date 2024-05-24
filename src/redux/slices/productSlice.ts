import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store';
import axios from 'axios';
import { Product } from '../../types';

const apiURL = process.env.REACT_APP_API_URL;

export interface ProductState {
    products: Product[],
    loading: boolean,
    error: string
}

const initialState : ProductState = {
    products: [],
    loading: false,
    error: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        startFetchProducts: (state) => {
            state.loading = true
        },
        fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.loading = false;
        },
        onError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload
        },
    },
})

export const {
    startFetchProducts,
    fetchProductsSuccess,
    onError
} = productSlice.actions

export const fetchProducts = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(startFetchProducts());
    try {
        let url = `${apiURL}/product`

        const response = await axios.get(url);
        dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(onError(error.message));
        }
    }
};

export default productSlice.reducer
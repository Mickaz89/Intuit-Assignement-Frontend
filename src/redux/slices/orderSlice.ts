import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store';
import axiosInstance from '../../utils/axiosInstance';


const apiURL = process.env.REACT_APP_API_URL;

interface NetworkError extends Error {
    response?: {
      data: {
        message: string[];
      };
    };
  }

interface OrderState {
    loading: boolean,
    error: string | null,
    trackId: string | null
}

const initialState: OrderState = {
    loading: false,
    error: null,
    trackId: null
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        orderCreateStart: (state) => {
            state.loading = true
        },
        orderCreateSuccess: (state, action: PayloadAction<string>) => {
            state.trackId = action.payload;
            state.loading = false;
        },
        orderCreateError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload
        }
    }
});


export const { orderCreateStart, orderCreateSuccess, orderCreateError} = orderSlice.actions

export const createOrder = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(orderCreateStart());
    try {
        let url = `${apiURL}/order/create`
        const cart = getState().cart;
        const data = {
            name: cart.shippingInfo?.name,
            address: cart.shippingInfo?.address,
            city: cart.shippingInfo?.city,
            phone: cart.shippingInfo?.phoneNumber,
            items: cart.items.map(item => ({
                productId: item._id,
                quantity: item.quantity
            })),
            total: cart.total
        }
        // Add a delay before sending the request
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axiosInstance.post(url, data);
        dispatch(orderCreateSuccess(response.data._id));
    } catch (error) {
        if (error instanceof Error) {
            let errorMessage = 'Bad Request: ';
            const networkError = error as NetworkError;
            if (networkError.response && networkError.response.data && Array.isArray(networkError.response.data.message)) {
              errorMessage += networkError.response.data.message.join(', ');
            }
            dispatch(orderCreateError(errorMessage));
          }
    }
};

export default orderSlice.reducer
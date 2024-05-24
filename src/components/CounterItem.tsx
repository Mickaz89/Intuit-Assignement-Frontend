import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrementItem, incrementItem } from '../redux/slices/cartSlice';
import { Item, Product } from '../types';

const CounterItem: React.FC<{ product: Product}> = ({ product }) => {

    const dispatch = useAppDispatch();

    const { items} = useAppSelector((state) => state.cart);

    return (
        <div className="flex justify-between items-center">
            <button
                onClick={() => dispatch(decrementItem(product._id))}
                className="bg-blue-500 text-white py-2 px-2 rounded-lg mt-2 w-1/4 hover:bg-blue-600"
            >
                -
            </button>
            <div className="w-1/2 text-center py-2">
                {items.find((item: Product) => item._id === product._id)?.quantity || 0}
            </div>
            <button
                onClick={() => dispatch(incrementItem(product._id))}
                className="bg-blue-500 text-white py-2 px-2 rounded-lg mt-2 w-1/4 hover:bg-blue-600"
            >
                +
            </button>
        </div>
    );
};

export default CounterItem;
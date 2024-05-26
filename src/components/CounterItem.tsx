import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrementItem, incrementItem } from '../redux/slices/cartSlice';
import { Product } from '../types';

interface CounterItemProps {
    product: Product;
    isSmall: boolean;
    showCounter: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({ product, isSmall, showCounter }) => {

    const dispatch = useAppDispatch();

    const { items } = useAppSelector((state) => state.cart);

    const buttonClass = `bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 ${isSmall ? '' : 'mt-2 w-1/4'}`;

    return (
        <div className="flex justify-between items-center">
            {showCounter && (
                <button
                    onClick={() => dispatch(decrementItem(product._id))}
                    className={buttonClass}
                >
                    -
                </button>
            )
            }
            <div className="w-1/2 text-center py-2 px-2">
                {items.find((item: Product) => item._id === product._id)?.quantity || 0}
            </div>
            {showCounter && (<button
                onClick={() => dispatch(incrementItem(product._id))}
                className={buttonClass}
            >
                +
            </button>)
            }
        </div>
    );
};

export default CounterItem;
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Item } from '../../../types';
import { decrementItem, incrementItem } from '../../../redux/slices/cartSlice';
import Footer from './Footer';

interface CartProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Cart: React.FC<CartProps> = ({ handleNext }) => {

    const dispatch = useAppDispatch()

    const cartItems = useAppSelector((state) => state.cart.items)

    return (
        <div>
            <div className="overflow-auto h-64 ">
                {cartItems.map((item: Item) => (
                    <div key={item.id} className="flex items-start justify-between p-2 border-b border-gray-200">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                        <div className="flex flex-col justify-between mr-4">
                            <p className="font-bold">{item.name}</p>
                            <p>{item.price * item.quantity}</p>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => dispatch(decrementItem(item.id))}
                                className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
                            >
                                -
                            </button>
                            <p className="mx-2">{item.quantity}</p>
                            <button
                                onClick={() => dispatch(incrementItem(item.id))}
                                className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer handleNext={handleNext} />
        </div>
    );
};

export default Cart;

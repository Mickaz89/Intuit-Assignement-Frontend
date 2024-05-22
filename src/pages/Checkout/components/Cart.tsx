import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Item } from '../../../types';
import { decrementItem, incrementItem } from '../../../redux/slices/cartSlice';
import { fsm } from '../../../utils/checkoutConfig';
import { useNavigate } from 'react-router-dom';

interface CartProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Cart: React.FC<CartProps> = ({ handleNext }) => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const cartItems = useAppSelector((state) => state.cart.items)

    const handleCancel = () => {
        fsm.dispatch('cancel');
        navigate('/');
    }

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
            <div className={'flex justify-between mt-6'}>
                <button onClick={handleCancel} className={`px-4 py-2 rounded text-white bg-red-500`}>Cancel</button>
                <div>
                    <button
                        onClick={handleNext}
                        disabled={!handleNext}
                        className={`px-4 py-2 rounded text-white bg-gray-500 mr-2 ${!handleNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

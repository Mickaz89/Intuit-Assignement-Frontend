import React from 'react';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { fsm } from '../../../utils/checkoutConfig';
import { useAppDispatch } from '../../../redux/hooks';
import { resetCart } from '../../../redux/slices/cartSlice';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Complete: React.FC<ReviewProps> = ({ handleBack }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleBackToShop = () => {
        fsm.dispatch('cancel');
        dispatch(resetCart());
        navigate('/');
    }
    return (
        <div>
            <div className="text-center mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg mb-2">Your order is confirmed.</p>
                <p className="text-lg mb-4">Order Number: 001</p>
                <button onClick={handleBackToShop} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Back to shop</button>
            </div>
            <Footer showCancel={false} />
        </div>
    );
};

export default Complete;

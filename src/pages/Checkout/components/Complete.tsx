import React from 'react';
import Footer from '../../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { fsm } from '../../../utils/checkoutConfig';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { resetCart } from '../../../redux/slices/cartSlice';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Complete: React.FC<ReviewProps> = ({ handleBack }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {loading, error, trackId } = useAppSelector((state) => state.order);

    const handleBackToShop = () => {
        fsm.dispatch('cancel');
        dispatch(resetCart());
        navigate('/');
    }

    if (loading) return <Loading />;
    if(error) return (
     <>
        <Error error={error} />
        <button onClick={handleBackToShop} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Back to shop</button>
     </>
    );

    return (
        <div>
            <div className="text-center mb-10 h-48">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg mb-2">Your order is confirmed.</p>
                <p className="text-lg mb-4">Order Number: {trackId}</p>
                <button onClick={handleBackToShop} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Back to shop</button>
            </div>
            <Footer showCancel={false} />
        </div>
    );
};

export default Complete;

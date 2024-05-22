import React from 'react';
import { fsm } from '../../../utils/checkoutConfig';
import { useNavigate } from 'react-router-dom';

interface ShippingProps {
    handleBack?: () => void;
    handleNext?: () => void;
  }

const Shipping: React.FC<ShippingProps> = ({ handleBack, handleNext }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        fsm.dispatch('cancel');
        navigate('/');
    }

    return (
        <div>
            <h2>Shipping</h2>
            <div className="flex justify-between mt-6">
                <button onClick={handleCancel} className={`px-4 py-2 rounded text-white bg-red-500`}>Cancel</button>
                <div>
                    <button
                        onClick={handleBack}
                        disabled={!handleBack}
                        className={`px-4 py-2 rounded text-white bg-gray-500 mr-2 ${!handleBack ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!handleNext}
                        className={`px-4 py-2 rounded text-white bg-blue-500 mr-2 ${!handleNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shipping;

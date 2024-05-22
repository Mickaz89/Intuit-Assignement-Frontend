import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fsm } from '../../../utils/checkoutConfig';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Review: React.FC<ReviewProps> = ({ handleBack }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        fsm.dispatch('cancel');
        navigate('/');
    }

    return (
        <div>
            <h2>Review</h2>
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
                </div>
            </div>
        </div>
    );
};

export default Review;

import React from 'react';
import Footer from './Footer';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Review: React.FC<ReviewProps> = ({ handleBack, handleNext }) => {

    return (
        <div>
            <h2>Review</h2>
            <Footer handleBack={handleBack} handleNext={handleNext} />
        </div>
    );
};

export default Review;

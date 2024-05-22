import React from 'react';
import Footer from './Footer';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Review: React.FC<ReviewProps> = ({ handleBack }) => {

    return (
        <div>
            <h2>Review</h2>
            <Footer handleBack={handleBack} />
        </div>
    );
};

export default Review;

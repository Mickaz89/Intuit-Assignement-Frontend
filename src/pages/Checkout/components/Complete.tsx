import React from 'react';
import Footer from './Footer';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Complete: React.FC<ReviewProps> = ({ handleBack }) => {

    return (
        <div>
            <h2>Complete</h2>
            <Footer handleBack={handleBack} />
        </div>
    );
};

export default Complete;

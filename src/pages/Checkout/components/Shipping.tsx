import React from 'react';
import Footer from './Footer';

interface ShippingProps {
    handleBack?: () => void;
    handleNext?: () => void;
  }

const Shipping: React.FC<ShippingProps> = ({ handleBack, handleNext }) => {

    return (
        <div>
            <h2>Shipping</h2>
            <Footer handleBack={handleBack} handleNext={handleNext} />
        </div>
    );
};

export default Shipping;

import React from 'react';
import Footer from './Footer';
import { useAppSelector } from '../../../redux/hooks';
import ItemsList from './ItemsList';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Review: React.FC<ReviewProps> = ({ handleBack, handleNext }) => {
    const { shippingInfo } = useAppSelector((state) => state.cart);

    if (!shippingInfo) {
        return <div>No shipping information</div>;
    }

    return (
        <div>
            <ItemsList showCounter={false} />
            <p>Name: {shippingInfo.name}</p>
            <p>Address: {shippingInfo.address}</p>
            <p>City: {shippingInfo.city}</p>
            <p>Phone: {shippingInfo.phoneNumber}</p>
            <Footer handleBack={handleBack} handleNext={handleNext} />
        </div>
    );
};

export default Review;

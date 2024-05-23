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
            <div className='p-2'>
                <div className='flex justify-between'>
                    <p>Name:</p>
                    <p>{shippingInfo.name}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Address:</p>
                    <p>{shippingInfo.address}</p>
                </div>
                <div className='flex justify-between'>
                    <p>City:</p>
                    <p>{shippingInfo.city}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Phone:</p>
                    <p>{shippingInfo.phoneNumber}</p>
                </div>
            </div>
            <Footer showCancel handleBack={handleBack} handleNext={handleNext} />
        </div>
    );
};

export default Review;

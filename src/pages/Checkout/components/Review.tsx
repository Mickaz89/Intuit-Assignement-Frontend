import React from 'react';
import Footer from '../../../components/Footer';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ItemsList from '../../../components/ItemsList';
import { createOrder } from '../../../redux/slices/orderSlice';


interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Review: React.FC<ReviewProps> = ({ handleBack, handleNext }) => {
    const dispatch = useAppDispatch();
    const { shippingInfo } = useAppSelector((state) => state.cart);

    const handleNextClick = () => {
        dispatch(createOrder());
        if (handleNext) {
            handleNext();
        }
    };

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
            <Footer showCancel handleBack={handleBack} handleNext={handleNextClick} />
        </div>
    );
};

export default Review;

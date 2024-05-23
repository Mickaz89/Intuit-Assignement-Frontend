import React, { useState } from 'react';
import Footer from './Footer';
import TextField from '../../../components/TextField';
import { useDispatch } from 'react-redux';
import { setShippingInfo } from '../../../redux/slices/cartSlice';
import { useAppSelector } from '../../../redux/hooks';

interface ShippingProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Shipping: React.FC<ShippingProps> = ({ handleBack, handleNext }) => {
    const dispatch = useDispatch();
    const shippingInfo = useAppSelector(state => state.cart.shippingInfo);

    const [name, setName] = useState(shippingInfo ? shippingInfo.name : '');
    const [address, setAddress] = useState(shippingInfo ? shippingInfo.address : '');
    const [city, setCity] = useState(shippingInfo ? shippingInfo.city : '');
    const [phoneNumber, setPhoneNumber] = useState(shippingInfo ? shippingInfo.phoneNumber : '');

    const handleNextClick = () => {
        dispatch(setShippingInfo({ name, address, city, phoneNumber }));
        if (handleNext) {
            handleNext();
        }
    };

    return (
        <>
            <TextField type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
            <TextField type='text' value={address} onChange={e => setAddress(e.target.value)} placeholder='Address' />
            <TextField type='text' value={city} onChange={e => setCity(e.target.value)} placeholder='City' />
            <TextField type='phone' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='Phone' />

            <Footer showCancel handleBack={handleBack} handleNext={handleNextClick} />
        </>
    );
};

export default Shipping;
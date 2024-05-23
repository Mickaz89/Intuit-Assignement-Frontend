import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import Footer from '../../../components/Footer';
import ItemsList from '../../../components/ItemsList';

interface CartProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Cart: React.FC<CartProps> = ({ handleNext }) => {
    return (
        <>
            <ItemsList showCounter={true}/>
            <Footer showCancel handleNext={handleNext} />
        </>
    );
};

export default Cart;

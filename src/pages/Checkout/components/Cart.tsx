import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import Footer from './Footer';
import ItemsList from './ItemsList';

interface CartProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Cart: React.FC<CartProps> = ({ handleNext }) => {
    return (
        <>
            <ItemsList showCounter={true}/>
            <Footer handleNext={handleNext} />
        </>
    );
};

export default Cart;

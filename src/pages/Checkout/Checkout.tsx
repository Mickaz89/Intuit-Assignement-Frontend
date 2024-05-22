import React, { useState } from 'react';
import { fsm } from '../../utils/checkoutConfig';
import { steps } from '../../utils/steps';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import Review from './components/Review';
import StepsContainer from '../../components/StepsContainer';

import styles from '../../styles/Checkout.module.css';


const Checkout: React.FC = () => {
    const [state, setState] = useState<string>(fsm.getState());


    const handleNext = () => {
        fsm.dispatch('next');
        setState(fsm.getState());
    };

    const handleBack = () => {
        fsm.dispatch('previous');
        setState(fsm.getState());
    };

    return (
        <div className={styles.container}>
            <StepsContainer currentStep={state} />
            <div className={styles.modal}>
                {state === 'cart' && <Cart handleNext={handleNext} />}
                {state === 'shipping' && <Shipping handleBack={handleBack} handleNext={handleNext} />}
                {state === 'review' && <Review handleBack={handleBack} />}
            </div>
        </div>
    );
};

export default Checkout;
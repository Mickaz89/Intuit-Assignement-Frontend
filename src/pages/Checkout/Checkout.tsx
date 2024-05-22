import React, { useState } from 'react';
import { CheckoutComponent, fsm, mapStateToComponent } from '../../utils/checkoutConfig';
import { steps } from '../../utils/steps';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import Review from './components/Review';
import StepsContainer from '../../components/StepsContainer';

import styles from '../../styles/Checkout.module.css';


const Checkout: React.FC = () => {
    const [state, setState] = useState<string>(fsm.getState());

    const Component: CheckoutComponent = mapStateToComponent[state];


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
                <Component handleBack={handleBack} handleNext={handleNext} />
            </div>
        </div>
    );
};

export default Checkout;
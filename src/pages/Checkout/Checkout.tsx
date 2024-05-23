import React, { useState } from 'react';
import { StepComponentType, fsm, mapStateToComponent } from '../../utils/checkoutConfig';
import StepsContainer from '../../components/StepsContainer';

import styles from '../../styles/Checkout.module.css';


const Checkout: React.FC = () => {
    const [state, setState] = useState<string>(fsm.getState());

    const StepComponent: StepComponentType = mapStateToComponent[state];


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
                <StepComponent handleBack={handleBack} handleNext={handleNext} />
            </div>
        </div>
    );
};

export default Checkout;
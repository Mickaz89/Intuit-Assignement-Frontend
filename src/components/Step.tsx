import React from 'react';
import { steps } from '../utils/checkoutConfig';

import styles from '../styles/Step.module.css';


const Step: React.FC<{ currentStep: string, step: string }> = ({ currentStep, step }) => (
    <div className={styles.step}>
        <div className={` ${styles.bullet} ${currentStep === step || steps.indexOf(currentStep) > steps.indexOf(step) ? styles['bullet-blue'] : styles['bullet-gray']}`}></div>
        <p className={styles['step-text']}>{step.charAt(0).toUpperCase() + step.slice(1)}</p>
    </div>
);

export default Step;
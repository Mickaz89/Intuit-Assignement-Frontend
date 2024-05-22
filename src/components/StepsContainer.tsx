import React from 'react';
import Step from './Step';
import { steps } from '../utils/checkoutConfig';


import styles from '../styles/StepsContainer.module.css'


const StepsContainer: React.FC<{ currentStep: string }> = ({ currentStep }) => (
    <div className={styles['step-container']}>
        {steps.map((step, index) => (
            <React.Fragment key={step}>
                <Step currentStep={currentStep} step={step} />
                {index < steps.length - 1 && (
                    <div className={
                        `${styles.line} ${currentStep === steps[index + 1] || steps.indexOf(currentStep) > index
                            ? styles['line-blue']
                            : styles['line-gray']
                        }`
                    }
                    >
                    </div>
                )}
            </React.Fragment>
        ))}
    </div>
);

export default StepsContainer;
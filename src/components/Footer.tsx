import React from 'react';
import { fsm } from '../utils/checkoutConfig';
import { useNavigate } from "react-router-dom";

import styles from './styles/Footer.module.css';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
    showCancel: boolean;
}

const Footer: React.FC<ReviewProps> = ({ handleBack, handleNext, showCancel }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        fsm.dispatch('cancel');
        navigate('/');
    }

    return (
        <div>
            <div className={styles['button-container']}>
                <div className={`${showCancel ? '' : 'opacity-0'} ${styles.button} ${styles['button-red']}`}>
                    {showCancel && <button onClick={handleCancel}>Cancel</button>}
                </div>
                <div>
                    <button
                        onClick={handleBack}
                        disabled={!handleBack}
                        className={`${styles['button']} ${styles['button-gray']} mr-2 ${!handleBack ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!handleNext}
                        className={`${styles['button']} ${styles['button-gray']} mr-2 ${!handleNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;

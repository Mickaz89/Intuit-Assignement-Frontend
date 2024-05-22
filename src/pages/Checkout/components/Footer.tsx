import React from 'react';
import { fsm } from '../../../utils/checkoutConfig';
import { useNavigate } from "react-router-dom";

import styles from '../../../styles/Footer.module.css';

interface ReviewProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

const Footer: React.FC<ReviewProps> = ({ handleBack, handleNext }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        fsm.dispatch('cancel');
        navigate('/');
    }

    return (
        <div>
            <div className={styles['button-container']}>
                <button onClick={handleCancel} className={`${styles.button} ${styles['button-red']}`}>Cancel</button>
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

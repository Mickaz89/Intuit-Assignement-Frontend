
import React from 'react';
import { Product } from '../types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CounterItem from './CounterItem';
import { addItem } from '../redux/slices/cartSlice';

import styles from './styles/ProductCard.module.css';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useAppDispatch();

    const { items } = useAppSelector((state) => state.cart)

    const isProductInCart = items.some((item: Product) => item._id === product._id);

    return (
        <div key={product._id} className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles['product-info']}>
                <h2 className={styles['product-name']}>{product.name}</h2>
                <p className={styles['product-description']}>{product.description}</p>
                <p className={styles['product-price']}>{product.price}</p>
            </div>
            {isProductInCart ? (
                <CounterItem product={product} isSmall={false} showCounter />
            ) : (
                <button
                    onClick={() => dispatch(addItem(product))}
                    className={styles.button}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default ProductCard;
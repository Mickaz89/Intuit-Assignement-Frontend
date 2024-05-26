import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/slices/productSlice';
import Loading from '../components/Loading';
import Error from '../components/Error';

import styles from '../styles/Products.module.css'


const Products: React.FC = () => {
    const dispatch = useAppDispatch();
    const { counter } = useAppSelector((state) => state.cart);
    const { products, loading, error } = useAppSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <Loading />;

    if (error) return <Error error={error} />;

    return (
        <div className={styles['products-container']}>
            <h1 className={styles.title}>Menu</h1>
            <div className={styles['products-grid']}>
                {products.map((product: Product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className={styles.footer}>
                {counter > 0 && (
                    <Link to="/checkout" className={styles['button-green']}>
                        Go to Checkout ({counter} items)
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Products;
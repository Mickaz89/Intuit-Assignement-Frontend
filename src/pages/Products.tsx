import React from 'react';
import { products } from '../utils/data';
import { useAppSelector } from '../redux/hooks';
import { Product } from '../types';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
    const { counter } = useAppSelector((state) => state.cart);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
                {products.map((product: Product) => {
                    return <ProductItem product={product} />;
                })}
            </div>
            <div className="fixed bottom-0 left-0 flex justify-center w-full">
                {counter > 0 && (
                    <Link to="/checkout" className="bg-green-500 text-white py-2 hover:bg-green-600 w-full text-center">
                        Go to Checkout ({counter} items)
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Products;
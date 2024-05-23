
import React from 'react';
import { Item, Product } from '../types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CounterItem from './CounterItem';
import { addItem } from '../redux/slices/cartSlice';

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useAppDispatch();

    const { items } = useAppSelector((state) => state.cart)

    const isProductInCart = items.some((item: Product) => item.id === product.id);

    return (
        <div key={product.id} className="flex flex-col border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 h-full">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="mt-4 flex-grow">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-green-600 font-bold">{product.price}</p>
            </div>
            {isProductInCart ? (
                <CounterItem product={product} />
            ) : (
                <button
                    onClick={() => dispatch(addItem(product))}
                    className="bg-blue-500 text-white py-2 px-2 rounded-lg mt-2 w-full hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default ProductItem;
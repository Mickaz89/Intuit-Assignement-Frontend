import React from 'react';
import { products } from './data';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { addItem, decrementItem, incrementItem } from './redux/slices/cartSlice';
import { Item, Product } from './types';


const Products: React.FC = () => {

    const cartItems = useAppSelector((state) => state.cart.items)
    const counter = useAppSelector((state) => state.cart.counter)
    const dispatch = useAppDispatch()

    const handleAddToCart = (product: Product) => {
        dispatch(addItem(product))
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
                {products.map((product: Product) => {
                    const isProductInCart = cartItems.some((item: Item) => item.id === product.id);

                    return (
                        <div key={product.id} className="flex flex-col border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 h-full">
                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-t-lg" />
                            <div className="mt-4 flex-grow">
                                <h2 className="text-xl font-semibold">{product.name}</h2>
                                <p className="text-gray-700">{product.description}</p>
                                <p className="text-green-600 font-bold">{product.price}</p>
                            </div>
                            {isProductInCart ? (
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => dispatch(decrementItem(product.id))}
                                        className="bg-blue-500 text-white py-2 px-2 rounded-lg mt-2 w-1/4 hover:bg-blue-600"
                                    >
                                        -
                                    </button>
                                    <div className="w-1/2 text-center py-2">
                                        {cartItems.find((item: Item) => item.id === product.id)?.quantity || 0}
                                    </div>
                                    <button
                                             onClick={() => dispatch(incrementItem(product.id))}
                                        className="bg-blue-500 text-white py-2 px-2 rounded-lg mt-2 w-1/4 hover:bg-blue-600"
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-blue-500 text-white py-2 px-2 rounded-lg mt-2 w-full hover:bg-blue-600"
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="fixed bottom-0 left-0 flex justify-center w-full">
                {counter > 0 && (
                    <button className="bg-green-500 text-white py-2 hover:bg-green-600 w-full text-center">
                        Go to Checkout ({counter} items)
                    </button>
                )}
            </div>

        </div>
    );
};

export default Products;

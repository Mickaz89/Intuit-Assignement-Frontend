import React from 'react';
import { useDispatch } from 'react-redux';
import { Item } from '../types';
import { decrementItem, incrementItem } from '../redux/slices/cartSlice';
import { useAppSelector } from '../redux/hooks';


interface ItemsListProps {
    showCounter: boolean;
}

const ItemsList: React.FC<ItemsListProps> = ({ showCounter = false }) => {
    const dispatch = useDispatch();

    const { items, total }: { items: Item[], total: number } = useAppSelector((state) => state.cart)

    return (
        <div className=" flex flex-col overflow-auto max-h-72">
            {items.map((item: Item) => (
                <div key={item._id} className="flex items-start justify-between p-2 border-b border-gray-200">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                    <div className="flex flex-col justify-between flex-grow ml-5">
                        <p className="font-bold overflow-hidden text-overflow-ellipsis whitespace-nowrap">{item.name}</p>
                        <p>{item.price * item.quantity} $</p>
                    </div>
                    <div className="flex items-center">
                        {showCounter && (
                            <>
                                <button
                                    onClick={() => dispatch(decrementItem(item._id))}
                                    className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
                                >
                                    -
                                </button>
                            </>
                        )}
                        <p className="mx-2">{item.quantity}</p>
                        {showCounter && (
                            <button
                                onClick={() => dispatch(incrementItem(item._id))}
                                className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
                            >
                                +
                            </button>
                        )}
                    </div>
                </div>
            ))}
            <div className="mt-4 self-end text-xl font-bold mr-3">
                Total: {total} $
            </div>
        </div>
    );
};

export default ItemsList;
import React from 'react';
import { Item } from '../types';
import { useAppSelector } from '../redux/hooks';
import CounterItem from './CounterItem';


interface ItemsListProps {
    showCounter: boolean;
}

const ItemsList: React.FC<ItemsListProps> = ({ showCounter = false }) => {

    const { items, total }: { items: Item[], total: number } = useAppSelector((state) => state.cart)

    return (
        <div className="flex flex-col">
            <div className="overflow-auto max-h-72">
                {items.map((item: Item) => (
                    <div key={item._id} className="flex items-start justify-between p-2 border-b border-gray-200">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                        <div className="flex flex-col justify-between flex-grow ml-5">
                            <p className="font-bold overflow-hidden text-overflow-ellipsis whitespace-nowrap">{item.name}</p>
                            <p>{item.price * item.quantity} $</p>
                        </div>
                        <CounterItem product={item} isSmall showCounter={showCounter} />
                    </div>
                ))}
            </div>
            <div className="mt-4 self-end text-xl font-bold mr-3">
                Total: {total.toFixed(2)} $
            </div>
        </div>
    );
};

export default ItemsList;
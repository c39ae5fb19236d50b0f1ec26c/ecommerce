import React from 'react';
import { useSelector } from 'react-redux';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string; 
    
}

export const Cart: React.FC = () => {
    const cart = useSelector((state: { cart: CartItem[] }) => state.cart);
    const total = cart.reduce((total, product) => {
        if (product.price && product.quantity) {
            return total + (product.price * product.quantity);
        } else {
            return total;
        }
    }, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price ? `Price: ${product.price}` : ''}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            ))}
            <h2>Total: {total}</h2>
        </div>
    );
};

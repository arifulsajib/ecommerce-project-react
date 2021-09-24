import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;

    const totalOrdered = cart.reduce((previous,current) => previous + current.quantity ,0);
    const itemsTotal = cart.reduce((previous, current) => previous + (current.price *current.quantity), 0);
    const shipping = cart.reduce((previous,current) => previous+current.shipping, 0);
    const tax = (itemsTotal + shipping) * 0.15;
    const orderTotal = itemsTotal + shipping+tax;
    
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items ordered: {totalOrdered}</h3>
            <p>Items Total: {itemsTotal.toFixed(2)}</p>
            <p>shipping: {shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Order Total: ${orderTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
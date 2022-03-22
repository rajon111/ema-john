import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Cart Order Summary</h3>
            <p>Selected:{cart.length}</p>
        </div>
    );
};

export default Cart;
// CartWidget.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    // Número hardcodeado para mostrar en la notificación del carrito
    const itemCount = 5;

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;

import React, { useState } from 'react';
import OrderQuantity from './OrderQuantity.jsx';

function OrderRow({ product, subTotal, setSubTotal }) {

    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1)
        setSubTotal(subTotal + product.price)
    };

    const decrement = () => {
        if (quantity === 0){
            return
        }
        setQuantity(quantity - 1)
        setSubTotal(subTotal - product.price)
    };


    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td className="alignRight">{product.price.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</td>
            <td><OrderQuantity 
                    increment={increment} 
                    decrement={decrement} 
                    quantity={quantity} 
                />
            </td>
            <td className="alignRight">{(quantity * product.price).toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</td>
        </tr>
    )
};

export default OrderRow;

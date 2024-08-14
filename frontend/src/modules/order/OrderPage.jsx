import { useState } from 'react';
import OrderRow from './OrderRow.jsx';
import products from './products.js';
import { MdOutlinePets } from "react-icons/md";

function OrderPage(){

    const [subTotal, setSubTotal] = useState(0)

    return (
        <>
           <h2><i><MdOutlinePets /></i>Order Pet Products</h2>
           <article>
                <p>Choose products and quantities:</p>
                <table id="order">
                    <caption>Current Products</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => 
                            <OrderRow 
                                product={product} 
                                subTotal={subTotal}
                                setSubTotal={setSubTotal}
                                key={i} 
                            />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="5">
                                Grand Total Cost of Order is &nbsp; &rarr;  &nbsp;
                                {(subTotal).toLocaleString("en-US", {style:"currency", currency:"USD"})}
                                </th>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </>
    )
}
    
export default OrderPage;
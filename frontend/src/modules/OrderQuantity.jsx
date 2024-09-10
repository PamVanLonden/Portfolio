import { useState } from 'react';
import { GoChevronDown, GoPlus } from 'react-icons/go';

function OrderQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        if (quantity === 10){
            setQuantity(10)            
        } else {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity === 0){
            setQuantity(0)            
        } else {
            setQuantity(quantity - 1 )
        }
    }


    return (
        <div class="clicker">
            <i><GoChevronDown onClick={decrement}  /></i>
             {quantity} 
             <i><GoPlus  onClick={increment} /></i>
        </div>
    );
}

export default OrderQuantity;
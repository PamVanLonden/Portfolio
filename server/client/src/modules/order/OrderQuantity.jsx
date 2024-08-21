import { GoChevronDown, GoPlus } from 'react-icons/go';

function OrderQuantity({increment, decrement, quantity}) { // curly braces needed

    return (
        <div className="clicker">
            <i><GoChevronDown onClick={decrement}  /></i>
             {` ${quantity} `}
             <i><GoPlus  onClick={increment} /></i>
        </div>
    );
}

export default OrderQuantity;


import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import buyIceCream from '../redux/iceCream/IceCreamAction';
function IceCreamContainer() {
    const noOfIceCream = useSelector(state => state.iceCream.noOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>NoOfIceCream - {noOfIceCream}</h1>
            <button onClick={() => dispatch(buyIceCream())}> BuyIceCream</button>
        </div>
    )
}

export default IceCreamContainer

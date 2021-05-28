import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/CakeAction';

function HooksCakeContainer() {
    const noOfCake = useSelector(state => state.cake.noOfCake);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>noOfCake - {noOfCake}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer

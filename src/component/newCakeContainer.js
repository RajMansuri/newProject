import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction'
function NewCakeContainer() {
    const dispatch = useDispatch();
    const noOfItems = useSelector(state => state.cake.noOfItems)
    const [number, setNumber] = useState(null);
    return (
        <div>
            <h1>{noOfItems}</h1>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>Items</button>

        </div>
    )
}

export default NewCakeContainer
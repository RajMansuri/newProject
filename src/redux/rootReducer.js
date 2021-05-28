import { combineReducers } from 'redux';
import { cakeReducer } from './cake/CakeReducer'
import { IceCreamReducer } from './iceCream/IceCreamReducer'
export const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream: IceCreamReducer,
    });
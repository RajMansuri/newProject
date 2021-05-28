import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
const buyCake = () => {
    return {
        type: 'BUY_CAKE',
        info: 'my first reducer action'
    }
}
const buyIceCreme = () => {
    return {
        type: 'BUY_ICECREAM',
        info: 'my second reducer action'
    }
}
const initialCakeState = {
    noOfCake: 10
}
const initialIceCreamState = {
    noOfIceCream: 20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type)
    {
        case 'BUY_CAKE':
            return {
                ...state,
                noOfCake: state.noOfCake - 1
            }
        default:
            return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type)
    {
        case 'BUY_ICECREAM':
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
});

const logger = createLogger({})
const store = createStore(rootReducer, applyMiddleware(logger));
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreme());
store.dispatch(buyIceCreme());
unsubscribe();
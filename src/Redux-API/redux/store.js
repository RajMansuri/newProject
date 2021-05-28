import { createStore, applyMiddleware } from 'redux';
import { reducer } from './FetchData/FetchReducer'
import reduxThunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(reduxThunk));
export default store
console.log(store.getState());
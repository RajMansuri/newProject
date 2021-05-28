import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import reduxThunk from 'redux-thunk';
//import React from 'react';
export default function Async() {

    const initialState = {
        user: [],
        loading: false,
        error: null
    }
    function requestSuccess(user) {
        return {
            type: 'REQUEST_SUCCESS',
            payload: user
        }
    }
    function requestFailure(error) {
        return {
            type: 'REQUEST_FAILURE',
            payload: error
        }
    }
    function request() {
        return {
            type: 'REQUEST',
        }
    }
    const reducer = (state = initialState, action) => {
        switch (action.type)
        {
            case 'REQUEST':
                return {
                    ...state,
                    loading: true
                }
            case 'REQUEST_FAILURE':
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                    user: []
                }
            case 'REQUEST_SUCCESS':
                return {
                    ...state,
                    loading: false,
                    user: action.payload,
                    error: null
                }
            default:
                return state;
        }
    }
    const fetchData = () => {
        return function (dispatch) {
            dispatch(request());
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    const user = response.data.map(data => data.id);
                    dispatch(requestSuccess(user));
                }).catch(error => {
                    console.log(error.message);
                    dispatch(requestFailure(error.message));
                });
        }

    }
    const store = createStore(reducer, applyMiddleware(reduxThunk));
    store.subscribe(() => console.log(store.getState()));
    store.dispatch(fetchData());
    return null;
}

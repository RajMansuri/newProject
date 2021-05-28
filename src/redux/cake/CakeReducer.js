const initialState = {
    noOfCake: 10
}
export const cakeReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'ADD_CAKE': return {
            ...state,
            noOfCake: state.noOfCake - action.payload
        }
        default: return state;
    }
}
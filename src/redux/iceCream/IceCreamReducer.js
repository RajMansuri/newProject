const initialState = {
    noOfIceCream: 20
}
export const IceCreamReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'BUY_ICECREAM':
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            }
        default: return state
    }
}
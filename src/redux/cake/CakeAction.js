export function buyCake(number = 1) {
    return {
        type: 'ADD_CAKE',
        payload: number
    }
}
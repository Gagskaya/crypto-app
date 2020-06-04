const initialState = {
    items: null
}
export const coins = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_COINS':
            return {
                ...state,
                items: action.payload
            }
            default : 
            return state
    }
}
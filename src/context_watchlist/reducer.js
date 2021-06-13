
export const initialState = [];

const reducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        // case 'ADD_TO_WATCHLIST':
        //     return [...state, action.watchlistMovie]
        
        case 'REMOVE_FROM_WATCHLIST':
            const filterRemove = state.filter((remove) => remove.id !== action.id);
            return [...filterRemove];
        default:
            return state;
    }
};

export default reducer;
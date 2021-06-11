

export default (state, action) => {
    switch(action.type) {
        case 'SEATCH_USER':
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}



































// import { ADD_TO_WATCHED, ADD_TO_WATCHLIST } from './movieActions';

// const movieReducer = ( state, action ) => {
//     switch (action.type) {
//         case 'ADD_TO_WATCHLIST': 
//             return {
//                 ...state,
//                 watchlist: [action.payload, ...state.watchlist]
//             }
//         case ADD_TO_WATCHED: 
//             return {}
//         default:
//             return state;

//     }
// }

// export default movieReducer;
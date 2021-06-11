import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';


const MovieState = props => {

    const initialState = {
        search:'',
        results: [],
        watchlist: [],
        watched: []
    }

    const [ state, dispatch ] = useReducer(MovieReducer, initialState)

    // search movie
    async function searchForTheMovie(e) {
        e.preventDefault();
        state.search(e.target.value)

        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9fdad333b13e02522618810cda6514e3&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then((data) => {
                if(!data.errors){
                    dispatch({
                        type: 'SEARCH_USER',
                        payload: data.results
                    })
                }    
            })
    }
    

    // action for addMovieToWatchlist

    // action for addMovieToWatched



    return <MovieContext.Provider 
        value={{
            search: state.search,
            results: state.results,
            watchlist: state.watchlist,
            watched: state.watched
        }}>
            {props.children}
    </MovieContext.Provider>
}

export default MovieState;




































// import React, { useReducer, useState, createContext } from 'react';
// // import MovieContext from './movieContext';
// import MovieReducer from './MovieState';


// const initialState = {
//     watchlist: [],
//     watched: []
// };

// export const MovieContext = createContext(initialState);


// export const MovieState = (props) => {

//     const [ state, dispatch ] = useReducer(MovieReducer, initialState);

//     const addMovieToWatchlist = (movie) => {
//         dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })
//     } 

//     return ( 
//         <>
//         <MovieContext.Provider 
//         value={{ 
//             watchlist: state.watched, 
//             watched: state.watched,
//             addMovieToWatchlist: addMovieToWatchlist
//             }}>

//             {props.children}
 
//         </MovieContext.Provider>
            
//         </>
//     )
// }

// export default MovieState;


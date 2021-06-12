import React from 'react';
import './MovieDisplay.css';
import Button from '@material-ui/core/Button';
import { useStateValue } from './context_watchlist/StateProvider';
import db from './firebase';


const MovieDisplay = ({ movie }) => {

    const [ state, dispatch ] = useStateValue();

    
    const addToWatchList = (e) => {
        e.preventDefault();

        db.collection('watchlist').add({
            title: movie.title,
            release: movie.release_date,
            rating: movie.vote_average,
            image: movie.poster_path,
        })

        dispatch({
            type: 'ADD_TO_WATCHLIST',
            watchlistMovie: movie
        })
    };

    const addToWatched = (e) => {
        e.preventDefault(); 
    };


    return (
        <div className='movieDisplay'>
            
            
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='movieDisplay__img' />
           
            
            
            <div className='movieDisplay_movieDetails'>
               
                <div className='movieDisplay_movieTitle'> Movie: {movie.title} </div>

                <div className='movieDisplay__release'> Release: {movie.release_date} </div>
                
                <div className='movieDisplay__ratings'> Ratings: {movie.vote_average} </div>

                <br />
                <br />
                <br />
            
                <Button variant="contained" color="primary" type='submit' onClick={addToWatchList} className='movieDisplay__AddToWatchlist'>
                    ADD TO WATCHLIST
                </Button>

                <Button variant="contained" color="primary" type='submit' onClick={addToWatched} className='movieDisplay__watched'>
                    WATCHED
                </Button>
            </div>
        </div>
    )
}

export default MovieDisplay

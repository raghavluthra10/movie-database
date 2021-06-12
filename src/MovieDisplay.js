import React, { useContext } from 'react';
import './MovieDisplay.css';
import Button from '@material-ui/core/Button';
import MovieState from './context/movieDataBase/MovieState';
import Watchlist from './pages/Watchlist'
import MovieContext from './context/movieDataBase/movieContext'



const MovieDisplay = ({ movie }) => {

    const addToWatched = (e) => {
        e.preventDefault(); 
    };

    const addToWatchList = (e) => {
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

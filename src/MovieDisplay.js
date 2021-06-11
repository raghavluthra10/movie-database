import React, { useContext } from 'react';
import './MovieDisplay.css';
import MovieState from './context/movieDataBase/MovieState';
import Watchlist from './pages/Watchlist'
import MovieContext from './context/movieDataBase/movieContext'



const MovieDisplay = ({ movie }) => {

    return (
        <div className='movieDisplayContainer'>
            <div className='movieDisplay_moviePhoto'>
            {movie.poster_path ? (
            <div>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='poster_path' />
            </div>
            ) : (
                <div className='movieDisplayFillerPost'></div>
            )}
            </div>
            
            <div className='movieDisplay_movieDetails'>
               
                <div className='movieSearch_movieTitle'> Movie: {movie.title} </div>
                Release: {movie.release_date}
                <br></br>

                Ratings: {movie.vote_average}

                <br></br>
                <br></br>
            
                <button type='button' className='movieDisplayAddButton movieDisplayFirstAddBtn'>
                    ADD TO WATCHLIST
                </button>

                <button type='button' className='movieDisplayAddButton'>
                    WATCHED
                </button>
            </div>
        </div>
    )
}

export default MovieDisplay

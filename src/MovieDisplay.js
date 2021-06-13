import React from 'react';
import './MovieDisplay.css';
import Button from '@material-ui/core/Button';
import  db, { auth } from './firebase';

const MovieDisplay = ({ movie }) => {

    const userId = auth.X;
    
    const addToWatchList = (e) => {
        e.preventDefault();

        db.collection('users').doc(userId).collection('watchlist').add({
            title: movie.title,
            poster: movie.poster_path,
            releaseDate: movie.release_date,
            ratings: movie.vote_average,
        })
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

            </div>
        </div>
    )
}

export default MovieDisplay

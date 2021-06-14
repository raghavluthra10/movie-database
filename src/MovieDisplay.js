import React, { useEffect, useState } from 'react';
import './MovieDisplay.css';
import Button from '@material-ui/core/Button';
import  db, { auth } from './firebase';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  

const MovieDisplay = ({ movie }) => {

    const userId = auth.X;

    const  [ watchlistValidation, setWatchlistValidation ] = useState([]);

    useEffect(() => {
        db.collection('users').doc(userId).collection('watchlist').onSnapshot(snapshot => (
            setWatchlistValidation(snapshot.docs.map(doc => ({id: doc.id, detail: doc.data() })))
        ))
    }, [])

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };
    
    
    const addToWatchList = (title) => {

        if (watchlistValidation.map( movieWatchlist => movieWatchlist.detail.title).includes(title)) { 
            setOpen(true);
        } else {
            db.collection('users').doc(userId).collection('watchlist').add({
                title: movie.title,
                poster: movie.poster_path,
                releaseDate: movie.release_date,
                ratings: movie.vote_average,
            })
        }
    };

    const alertStyle = {
        width: '100%',
        fontSize: '16px'
    }

    return (
        <>
            
            <Snackbar style={{width: '400px'}} open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" style={alertStyle} >
                    Already added to your Watchlist
                </Alert>
            </Snackbar>
            
            
        
            <div className='movieDisplay'>
                
                
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='movieDisplay__img' />
            
                
                
                <div className='movieDisplay_movieDetails'>
                
                    <div className='movieDisplay_movieTitle'> Movie: {movie.title} </div>

                    <div className='movieDisplay__release'> Release: {movie.release_date} </div>
                    
                    <div className='movieDisplay__ratings'> Ratings: {movie.vote_average} </div>

                    <br />
                    <br />
                    <br />
                
                    <Button variant="contained" color="primary" type='submit' onClick={() => addToWatchList(movie.title)} className='movieDisplay__AddToWatchlist'>
                        ADD TO WATCHLIST
                    </Button>

                </div>
            </div>
        </>
    )
}

export default MovieDisplay

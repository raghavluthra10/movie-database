import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import db, { auth } from '../firebase';

export const Watchlist = () => {

    const userId = auth.X;

    const [ moviesAddedToWatchlist, setMoviesAddedToWatchlist ] = useState([]);

    useEffect(() => {
        db.collection('users').doc(userId).collection('watchlist').onSnapshot(snapshot => (
            setMoviesAddedToWatchlist(snapshot.docs.map(doc => ({id: doc.id, detail: doc.data() })))
        ))
    }, []);

    const removeFromWatchlist = (id) => {
        db.collection('users').doc(userId).collection('watchlist').doc(id).delete();
    };

    return (
        <Container> 
            {moviesAddedToWatchlist.length > 0 ? 
                moviesAddedToWatchlist.map((v)=> (
                    <MoviesAddedToWatchlist key={v.detail.title}>
                        <ImageWatchlist src={`https://image.tmdb.org/t/p/w200${v.detail.poster}`} alt={v.detail.title} />

                        <div > Movie: {v.detail.title} </div>

                        <div > Release: {v.detail.releaseDate} </div>
                        
                        <div> Ratings: {v.detail.ratings} </div>

                        <Button variant='outlined' color="primary" onClick={() => removeFromWatchlist(v.id)}>
                            Remove from watchlist
                        </Button>
                    </MoviesAddedToWatchlist>
                ))
             : (
                <WatchlistEmpty>
                    Watchlist is empty
                </WatchlistEmpty>
            )}
            

            
        </Container>
    )
}

export default Watchlist

// const screenSize = {
//     medium: '1420px'
// }

const Container = styled.div`
    padding: 50px 5vw;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    grid-gap: 100px;

    @media screen and (max-width: 1420px){
        grid-template-columns: auto auto auto;
    }

    @media screen and (max-width: 1020px){
        grid-template-columns: auto  auto;
        padding: 50px 10vw;
    }

    @media screen and (max-width: 750px){
        grid-template-columns: auto;
        padding: 50px 10vw;
    }

`;

const MoviesAddedToWatchlist = styled.div`
    align-self: center;
    max-width: 260px;
    min-width: 240px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div{
        font-weight: 500;
        font-size: 15px;
    }

`;

const ImageWatchlist = styled.img`
    border-radius: 5px;
    height: 300px;
    width: 100%;
`;

const WatchlistEmpty = styled.h1`
    font-weight: 700;
`;
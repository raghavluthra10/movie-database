import React from 'react';
import { useStateValue } from '../context_watchlist/StateProvider';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Watchlist = () => {

    const [ state, dispatch ] = useStateValue();
   
    const removeFromWatchlist = (id) => {
        dispatch({
            type: 'REMOVE_FROM_WATCHLIST',
            id: id,
        })
    };

    return (
        <Container> 
            {state.length > 0 ? 
                state.map((v)=> (
                    <MoviesAddedToWatchlist key={v.id}>
                        <ImageWatchlist src={`https://image.tmdb.org/t/p/w200${v.poster_path}`} alt={v.title} />

                        <div > Movie: {v.title} </div>

                        <div > Release: {v.release_date} </div>
                        
                        <div> Ratings: {v.vote_average} </div>

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

const Container = styled.div`
    padding: 50px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
    
`;

const MoviesAddedToWatchlist = styled.div`
    width: 250px;
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
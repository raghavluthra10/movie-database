import React, { useState, useEffect } from 'react';
import MovieDisplay from './MovieDisplay';
import './SearchMovie.css';
import Button from '@material-ui/core/Button';
import  db, { auth } from './firebase';

function SearchMovie() {

    
    const userId = auth.X;

    const [ userDetails, setUserDetails ] = useState([]);

    useEffect( () => {
        //fetch user details from the database
        db.collection('users').doc(userId).collection('userDetails').onSnapshot(snapshot => (
            setUserDetails(snapshot.docs.map(doc => ( doc.data() )))
        ))
    }, [userId])

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    
    async function searchForTheMovie(e) {
        e.preventDefault();
        setSearch(e.target.value)

        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9fdad333b13e02522618810cda6514e3&language=en-US&page=1&include_adult=false&query=${search}`)
            .then(res => res.json())
            .then((data) => {
                if(!data.errors){
                    setResults(data.results)
                } else {
                    setResults([])
                }    
            })
    }


    const clearAll = (e) => {
        e.preventDefault();

        setResults([])
        setSearch('')
    }

        return (
        <div className='searchMove'>
            <h1 className='searchMovie__displayName'>
                {userDetails.length > 0 && userDetails[0].displayName}
            </h1>

            <form  className='searchMovieContainer'>
                <input 
                className='searchMovieInputSearch' 
                type='text'  
                placeholder='Search movie...' 
                value={search}
                onChange={searchForTheMovie}
                />

                <Button variant="contained" color="primary" type='submit'
                onClick={clearAll} 
                className='searchMovieClearButton' 
                > 
                Clear
                </Button>
            </form>
            

            <div>

                {results.length > 0 && (
                    <>
                        {results.filter((poster) => poster.poster_path !== null).map((movie) => (
                            <MovieDisplay  
                            key={movie.id}
                            movie={movie}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
        )
    }


export default SearchMovie

import React, { useContext, useState } from 'react'
import MovieDisplay from './MovieDisplay';
import './SearchMovie.css';
import Button from '@material-ui/core/Button';
// import MovieState from './context/movieDataBase/MovieState';
// import MovieContext from './context/movieDataBase/movieContext';

function SearchMovie() {

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
                type='button' 
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


//how to make sure page not restart when navigate to another page reactjs
//how to make a login page in reactjs backend
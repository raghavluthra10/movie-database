import React, { useContext, useState } from 'react'
import MovieDisplay from './MovieDisplay';
import './SearchMovie.css';
// import MovieState from './context/movieDataBase/MovieState';
// import MovieContext from './context/movieDataBase/movieContext';

function SearchMovie() {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    
    async function searchForTheMovie(e) {
        e.preventDefault();
        setSearch(e.target.value)

        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9fdad333b13e02522618810cda6514e3&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then((data) => {
                if(!data.errors){
                    setResults(data.results)
                } else {
                    setResults([])
                }    
            })
            console.log(results)
    }


    const clearAll = (e) => {
        setResults([])
        setSearch('')
    }


  
        return (
        <>
        <div className='searchMovieContainer'>
            <form>
                <input 
                className='searchMovieInputSearch' 
                type='text'  
                placeholder='Search movie...' 
                value={search}
                onChange={searchForTheMovie}
                />

                <button 
                onClick={clearAll} 
                className='searchMovieClearButton' 
                type='button' 
                > 
                Clear
                </button>
            </form>
        </div>

        <div>

            {results.length > 0 && (
                <>
                    {results.map((movie) => (
                        <ul key={movie.id}>
                        <MovieDisplay  
                        movie={movie}
                        />
                        </ul>
                    ))}
                </>
            )}
        </div>
        </>
        )
    }


export default SearchMovie


//how to make sure page not restart when navigate to another page reactjs
//how to make a login page in reactjs backend
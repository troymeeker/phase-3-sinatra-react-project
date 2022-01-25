import React from 'react';
import MovieCard from './MovieCard';
import MovieForm from './MovieForm';


const Movies = ({movies, handleMovieSubmit, onMovieDelete}) => {
 
  const movieCards = movies.map((movie) => {
   return <MovieCard movie={movie} key={movie.id} onMovieDelete={onMovieDelete}/>
  })
  

  return (
    <div>
      <h1  className='navbar-item'> Movies Component</h1>

     
      <MovieForm handleMovieSubmit={handleMovieSubmit}/>

      <ul>{movieCards}</ul>
     
  
    </div>
  );
}

export default Movies; 
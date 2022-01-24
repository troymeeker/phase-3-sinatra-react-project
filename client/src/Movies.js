import React from 'react';
import MovieCard from './MovieCard';


const Movies = ({movies}) => {
 
  const movieCards = movies.map((movie) => {
   return <MovieCard movie={movie} key={movie.id}/>
  })
  

  return (
    <div>
      <h1  className='navbar-item'> Movies Component</h1>

      <button>Add Movie</button> 

      <ul>{movieCards}</ul>
     
  
    </div>
  );
}

export default Movies; 
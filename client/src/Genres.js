import React from 'react';
import GenreCard from './GenreCard';
import GenreForm from './GenreForm';

const Genres = ({genres, handleGenreDelete, handleGenreSubmit}) => {
 
  const genreCards = genres.map((genre) => {
   return <GenreCard genre={genre} key={genre.id} deleteGenre={handleGenreDelete}/>
  })
  
  return (
    <div  className='list-item'>
      <h1 className='border'> Genres </h1>
      <GenreForm handleGenreSubmit={handleGenreSubmit}/>

      <ul> {genreCards} </ul>
    
    </div>
  );
}

export default Genres; 
import React from 'react';
import GenreCard from './GenreCard';


const Genres = ({genres}) => {
 
  const genreCards = genres.map((genre) => {
   return <GenreCard genre={genre} key={genre.id} />
  })
  

  return (
    <div  className='list-item , genres'>
      <h1 className='border'> Genres </h1>
     
      <ul>
      {genreCards}
     </ul>
    
    </div>
  );
}

export default Genres; 
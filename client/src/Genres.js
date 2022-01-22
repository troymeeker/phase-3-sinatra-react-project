import React from 'react';
import GenreCard from './GenreCard';


const Genres = ({genres}) => {
 
  const genreCards = genres.map((genre) => {
   return <GenreCard genre={genre} key={genre.id}/>
  })
  

  return (
    <div >
      <h1 className='navbar-item'> Genres Component</h1>
     <ul>
      {genreCards}
     </ul>
     <form>Create new Genre Form</form>
    </div>
  );
}

export default Genres; 
import React from 'react';
import ActorCard from './ActorCard';
import ActorForm from './ActorForm';

const Actors = ({actors, handleActorSubmit, onActorDelete}) => {
  
    const actorCards = actors.map((actor) => {
     return <ActorCard actor={actor} key={actor.id} onActorDelete={onActorDelete}/>
    })
  
    return (
      <div className='list-item'>
        <h1 className='border'> Actors </h1>
       
      <ActorForm handleActorSubmit={handleActorSubmit}/>

       <ul>
       
        {actorCards }
       </ul>
         
      </div>
    )
  }

export default Actors;
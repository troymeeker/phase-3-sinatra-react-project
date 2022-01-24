import React from 'react';
import ActorCard from './ActorCard';
import ActorForm from './ActorForm';

const Actors = ({actors, handleSubmit}) => {
  
 
    const actorCards = actors.map((actor) => {
     return <ActorCard actor={actor} key={actor.id}/>
    })
    
 
  
    return (
      <div >
        <h1 className='navbar-item'> Actors Component</h1>

       
      <ActorForm handleSubmit={handleSubmit}/>

       <ul>
        {actorCards}
       </ul>
       
       
         
      </div>
    )
  }

export default Actors;
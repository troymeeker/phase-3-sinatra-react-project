import React from 'react';
import ActorCard from './ActorCard';

const Actors = ({actors}) => {
  
 
    const actorCards = actors.map((actor) => {
     return <ActorCard actor={actor} key={actor.id}/>
    })
    
  
    return (
      <div >
        <h1 className='navbar-item'> Actors Component</h1>
       <ul>
        {actorCards}
       </ul>
       <form>Create new Actor Form</form>
         
      </div>
    );
  }

export default Actors;
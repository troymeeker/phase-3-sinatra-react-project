import React from "react";

const ActorCard = ({actor}) => {

    return (
        <div >
            <h4> |  {actor.name}  | </h4>
            <h4> Age: {actor.age}</h4>
      
        </div>
    )
}

export default ActorCard;
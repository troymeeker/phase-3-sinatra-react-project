import React from "react";

const ActorCard = ({actor, onActorDelete}) => {
    const {id, name, age} = actor;

    function handleDelete(){
        fetch(`http://localhost:9292/actors/${id}`, {
            method: "DELETE", 
        })
        onActorDelete(id)
    }
   
    return (
        <div>
            <h4> |  {name}  | </h4>
            <h4> Age: {age}  </h4>

            <button onClick={handleDelete}>Delete This Actor</button>
        </div>
    )
}

export default ActorCard;
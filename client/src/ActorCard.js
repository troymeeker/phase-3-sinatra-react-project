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
        <div className="each-actor">
            <h4> |  {name}  | </h4><br/>
            <h4> Age: {age}  </h4><br/>

            <button onClick={handleDelete} className="button">Delete This Actor</button>

          
        </div>
    )
}

export default ActorCard;
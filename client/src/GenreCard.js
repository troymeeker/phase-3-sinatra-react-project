import React from "react";

const GenreCard = ({genre}) => {
  const {name} = genre

    // function handleDelete(){
    //   fetch(`http://localhost:9292/genres/${id}`, {
    //         method: "DELETE", 
    //     })
    //    onGenreDelete(id)
    
    // }

    return (
        <div>
          <li>{name}</li>
         {/* <button onClick={handleDelete}>Delete</button> */}
        </div>
    )
}

export default GenreCard;
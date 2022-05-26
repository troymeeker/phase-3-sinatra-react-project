import React from "react";

const GenreCard = ({genre, deleteGenre}) => {
  const {id,name} = genre;

    function handleDelete(){
      fetch(`http://localhost:9292/genres/${id}`, {
            method: "DELETE", 
        })
       deleteGenre(id)
    
    }

    return (
        <div className="each-genre">
          <h4 > - {name} - </h4><br/>
         <button onClick={handleDelete} className="button">Delete</button>
        </div>
    )
}

export default GenreCard;
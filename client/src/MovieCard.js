import React from "react";

const MovieCard = ({movie, onMovieDelete}) => {
    const {id, name, rating, release_date} = movie;

    function handleDelete(){
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "DELETE", 
        })
        onMovieDelete(id)
    }
    return (
        <div>
           
            <h4> - {name} -</h4>
            <h4> Rating: {rating}</h4>
            <h4> Released in: {release_date}</h4>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default MovieCard;
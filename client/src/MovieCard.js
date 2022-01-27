import React from "react";

const MovieCard = ({movie, onMovieDelete}) => {
    // console.log(movie);
    const {id, movieName, rating, release_date, genre} = movie;
    // console.log(genre);
    
    function handleDelete(){
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "DELETE", 
        })
        onMovieDelete(id)
    }
    
    return (
        <div>
            <h4> - {movieName} -</h4>
            <h4> Rating: {rating}</h4>
            <h4> Released in: {release_date}</h4>
            <h4> Genre: {genre.name} </h4>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default MovieCard;
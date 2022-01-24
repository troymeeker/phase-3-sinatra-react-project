import React from "react";

const MovieCard = ({movie}) => {

    return (
        <div>
           
            <h4> - {movie.name} -</h4>
            <h4> Rating: {movie.rating}</h4>
            <h4> Released in: {movie.release_date}</h4>
        
        </div>
    );
}

export default MovieCard;
import React, { useState } from "react";

const MovieForm = ({handleMovieSubmit}) => {
    const [name, setName] = useState("")
    const [rating, setMovieRating] = useState("")
    const [release_date, setReleaseDate] = useState("")

    function handleAddMovie(e){
        e.preventDefault();
        // console.log('actor added');
        const movie = {
            name: name, 
            rating: rating, 
            release_date: release_date,
        };

        handleMovieSubmit(movie)
        setName("")
        setMovieRating("")
        setReleaseDate("")

    }

    function handleMovieNameChange(e){
        setName(e.target.value)
    }

    function handleMovieRating(e){
        setMovieRating(e.target.value)
    }

    function handleMovieRelease(e){
        setReleaseDate(e.target.value)
    }

    return (
        <div>
        <form onSubmit={handleAddMovie} className='form-border'>
        <h3>Add Movie </h3>
          <div>
             <label>Movie Name:</label>
             <input type='text' placeholder='Name' onChange={handleMovieNameChange} value={name}/>
          </div> 
          <div> 
              <label> Rating: </label>
              <input type='text' placeholder='Rating' onChange={handleMovieRating} value={rating}/>
          </div>
          <div> 
              <label> Release Date: </label>
              <input type='text' placeholder='Release Date' onChange={handleMovieRelease} value={release_date}/>
          </div>
 
        <button>Add Movie</button>
       </form>
      </div> 
    )
}

export default MovieForm;
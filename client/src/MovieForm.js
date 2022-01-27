import React, { useState } from "react";


const MovieForm = ({handleMovieSubmit}) => {
    
    const [name, setName] = useState("")
    const [rating, setMovieRating] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [genre_id, setGenreId] = useState("")

    // const [genre, setGenre] = useState("")
    

    function handleAddMovie(e){
        e.preventDefault();
        // console.log('actor added');
        const movie = {
            name: name, 
            rating: rating, 
            release_date: release_date,
            genre_id: genre_id
        };

        handleMovieSubmit(movie)
        setName("")
        setMovieRating("")
        setReleaseDate("")
        setGenreId("")
        

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
    function handleGenreChange(e){
         setGenreId(e.target.value)
        //  console.log(e.target.value);
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
          <div> 
              <label>Select Genre: </label>
              <select onChange={handleGenreChange} >
                  <option value='0'>Select</option>
                  <option value='1'>Action</option>
                  <option value='2'>Drama</option>
                  <option value='3'>Comedy</option>

              </select>
          </div>
 
        <button>Add Movie</button>
       </form>
      </div> 
    )
}

export default MovieForm;
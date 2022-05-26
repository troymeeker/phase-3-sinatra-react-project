import React, {useState} from "react";

const GenreForm = ({ handleGenreSubmit }) => {
    const [name, setName] = useState("")


    function handleAddGenre(e){
        e.preventDefault();

        const genre = {
            name: name
        };

        handleGenreSubmit(genre);
        setName("")
    }

    function handleChangeName(e){
        setName(e.target.value)
    }

    return (
        <div >
            
           <form  onSubmit={handleAddGenre} className="form-border">
               <h3>Add Genre</h3>
              <label>Genre: </label> 
              <input type='text' name='name'  placeholder="Genre Name" onChange={handleChangeName} value={name}/><br/>
              <button className="button">Submit</button>
           </form>
        </div>
    )
}
export default GenreForm;
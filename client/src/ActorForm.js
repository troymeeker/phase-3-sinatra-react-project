import React, {useState} from "react";


const ActorForm = ({handleActorSubmit}) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")


    function handleAddActor(e){
        e.preventDefault();
        // console.log('actor added');
        const actor = {
            name: name, 
            age: age,
        };

        handleActorSubmit(actor)
        setName('')
        setAge('')

    }
    function handleNameChange(e){
         setName(e.target.value)
    }
    function handleAgeChange(e){
         setAge(e.target.value)
    }

    return (
     
     <div>
       <form onSubmit={handleAddActor}>
         <div>
            <label>Actor Name:</label>
            <input type='text' placeholder='Name' onChange={handleNameChange} value={name}/>
         </div> 
         <div> 
             <label>Actor Age: </label>
             <input type='text' placeholder='Age' onChange={handleAgeChange} value={age}/>
         </div>

       <button>Add Actor</button>
      </form>
     </div> 
   )
}

export default ActorForm;
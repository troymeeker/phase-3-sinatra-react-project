import React, { useEffect } from 'react';

const Genres = () => {

  // fetch from /genres
  useEffect(()=>{
    fetch('http://localhost:9292/genres')
    .then(resp => resp.json())
    .then(data => console.log(data))
  },[])
  
  return (
    <div >
      <h1 className='navbar-item'> Genres Component</h1>
      <h4>Render __ here</h4>
    </div>
  );
}

export default Genres;
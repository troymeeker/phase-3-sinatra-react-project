import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Genres from './Genres';
import Movies from './Movies';
import Actors from './Actors';
import Home from './Home';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/movies')
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/actors')
      .then(resp => resp.json())
      .then(data => setActors(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/genres')
      .then(resp => resp.json())
      .then(data => setGenres(data))
  }, [])

  function handleActorSubmit(actor){ 
    fetch('http://localhost:9292/actors', {
        method: "POST", 
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify(actor)
    })
    .then((resp) => resp.json())
    .then((actor) => {
         setActors([...actors, actor])
        // console.log('actors!');
        
    })
  } 

  function handleMovieSubmit(movie){
    fetch('http://localhost:9292/movies', {
        method: "POST", 
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    })
    .then((resp) => resp.json())
    .then((movie) => {
         setMovies([...movies, movie])
        
        
    })

  }

  function handleActorDelete(id){
    const updatedActors = actors.filter((actor) => actor.id !== id)
    setActors(updatedActors);
  } 
   
  function handleMovieDelete(id){
    const updatedMovies = movies.filter((movie) => movie.id !== id)
    setMovies(updatedMovies);
  }
   
  // function handleGenreDelete(id){
  //   const updatedGenres = genres.filter((genre) => genre.id !== id)
  //   setGenres(updatedGenres);
  // }
  

  return (
   <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/genres" element={<Genres genres={genres} />} />

        <Route path="/movies" element={<Movies movies={movies} handleMovieSubmit={handleMovieSubmit} onMovieDelete={handleMovieDelete}/>}/>

        <Route path="/actors" element={<Actors actors={actors} handleActorSubmit={handleActorSubmit} onActorDelete={handleActorDelete}/> }/>

      </Routes>
   </BrowserRouter>
  );
}

export default App;

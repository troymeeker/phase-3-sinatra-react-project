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
  const [movies, setMovies] = useState([])
  const [actors, setActors] = useState([])
  const [genres, setGenres] = useState([])

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
  

  return (
   <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/genres" element={<Genres genres={genres}/>} />

        <Route path="/movies" element={<Movies movies={movies}/>}/>

        <Route path="/actors" element={<Actors actors={actors}/> }/>

      </Routes>
   </BrowserRouter>
  );
}

export default App;

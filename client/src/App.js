import React from 'react';
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
  return (
   <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 

        <Route path="/genres" element={<Genres/>}/>

        <Route path="/movies" element={<Movies/>}/>
        
        <Route path="/actors" element={<Actors/>}/>

      </Routes>
   </BrowserRouter>
  );
}

export default App;

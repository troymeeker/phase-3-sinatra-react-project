import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div >
      <nav className='navbar'>
        <ul >
         <li><Link to ='/' className="navbar-item">Home</Link> </li>
         <li><Link to='/genres' className="navbar-item">Genres</Link></li>
         <li><Link to='/movies' className="navbar-item">Movies</Link></li>
         <li><Link to='/actors' className="navbar-item">Actors</Link></li>
          
        </ul>
      </nav>  
    </div>
  );
}

export default Navbar;
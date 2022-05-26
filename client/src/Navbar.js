import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div >
      <nav >
        <ul className='navbar'>
         <li><Link to ='/' className="navbar-item">HOME</Link> </li>
         <li><Link to='/genres' className="navbar-item">GENRES</Link></li>
         <li><Link to='/movies' className="navbar-item">MOVIES</Link></li>
         <li><Link to='/actors' className="navbar-item">ACTORS</Link></li>
          
        </ul>
      </nav>  
    </div>
  );
}

export default Navbar;
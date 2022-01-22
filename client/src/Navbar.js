import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  

  return (
    <div >
      <nav className='navbar'>
        <ul >
         <li><Link to ='/'>Home</Link> </li>
         <li><Link to='/genres'>Genres</Link></li>
         <li><Link to='/movies'>Movies</Link></li>
         <li><Link to='/actors'>Actors</Link></li>
          
        </ul>
        
      </nav>
        
    </div>
  );
}

export default Navbar;
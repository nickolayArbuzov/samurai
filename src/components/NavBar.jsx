import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return <nav className='nav'>
    <div className='item'>
      <p>Profile</p>
    </div>
    <div className='item'>
      <a href='#'>Mes</a>
    </div>
    <div className='item'>
      <a href='#'>News</a>
    </div>
    <div className='item'>
      <a href='#'>Feed</a>
    </div>
  </nav>
}

export default NavBar;
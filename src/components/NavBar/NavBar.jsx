import React from 'react';
import nav from'./NavBar.module.css';

const NavBar = () => {
    return <nav className={nav.nav}>
    <div className={nav.item}>
      <a>Profile</a>
    </div>
    <div className={`${nav.item} ${nav.active}`}>
      <a>Mes</a>
    </div>
    <div className={nav.item}>
      <a>News</a>
    </div>
    <div className={nav.item}>
      <a>Feed</a>
    </div>
  </nav>
}

export default NavBar;
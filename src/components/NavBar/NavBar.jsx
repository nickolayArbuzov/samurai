import React from 'react';
import s from'./NavBar.module.css';

const NavBar = () => {
    return <nav className={s.nav}>
    <div className={s.item}>
      <a>Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a>Mes</a>
    </div>
    <div className={s.item}>
      <a>News</a>
    </div>
    <div className={s.item}>
      <a>Feed</a>
    </div>
  </nav>
}

export default NavBar;
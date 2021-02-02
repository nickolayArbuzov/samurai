import React from 'react';
import preLoader from '../../../assets/images/7677edd5a44b10130b8824ca020ba60b.gif';
import s from './Preloader.module.css';

let Preloader = (props) => {
    return <div style={{backgroundColor:'red'}}>
            <img src={preLoader} className={s.preLoader} alt=''/>
        </div>
}

export default Preloader;
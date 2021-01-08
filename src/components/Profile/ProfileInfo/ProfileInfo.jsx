import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if(!props.profile){
      return <Preloader/>
    }
    debugger;
    return (
    <div>
      <div>
        <img src='https://darsik.com/wp-content/uploads/2020/06/IMG_6700-1024x682.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          ava + description
      </div>
    </div>
    )
}

export default ProfileInfo;
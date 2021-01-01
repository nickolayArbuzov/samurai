import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div>
      <div>
        <img src='https://darsik.com/wp-content/uploads/2020/06/IMG_6700-1024x682.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
          ava + description
      </div>
    </div>
    )
}

export default ProfileInfo;
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'/>
    </div>
    <MyPosts/>
  </div>
}

export default Profile;
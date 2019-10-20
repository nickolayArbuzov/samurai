import React from 'react';
import pro from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={pro.content}>
    <div>
      <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'/>
    </div>
    <MyPosts/>
  </div>
}

export default Profile;
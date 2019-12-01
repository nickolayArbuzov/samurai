import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

  let posts =[
    {id:1, message:'Hi, how are you?',likeCount:2},
    {id:2, message:'thanks, i"m fine!',likeCount:1},
    {id:3, message:'Ok!!',likeCount:3},
    {id:4, message:'What?',likeCount:1},
    {id:5, message:'And about you?',likeCount:2},
    {id:6, message:'What about you?',likeCount:5}
  ]

    return <div>
      <ProfileInfo/>
      <MyPosts posts={posts}/>
    </div>
}

export default Profile;
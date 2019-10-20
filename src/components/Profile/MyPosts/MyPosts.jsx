import React from 'react';
import pro from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={pro.posts}>
      <div className={pro.item}>myPosts</div>
      <div className={pro.item}>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>add post</button>
      </div>
      <Post message = 'Hi, how are you?' likeCount='2'/>
      <Post message = 'thanks, i"m fine!' likeCount='1'/>
      <Post message = 'Ok!!' likeCount='3'/>
      <Post message = 'What about you?' likeCount='5'/>
      
    </div>
}

export default MyPosts;
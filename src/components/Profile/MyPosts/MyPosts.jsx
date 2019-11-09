import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.posts}>
      <h3><div className={s.postsBlock}>myPosts</div></h3>
      <div className={s.item}>
          <div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
        <button>add post</button>
      </div>
      <div className={s.posts}>
        <Post message = 'Hi, how are you?' likeCount='2'/>
        <Post message = 'thanks, i"m fine!' likeCount='1'/>
        <Post message = 'Ok!!' likeCount='3'/>
        <Post message = 'What about you?' likeCount='5'/>
      </div>
    </div>
}

export default MyPosts;
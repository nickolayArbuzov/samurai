import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postData =[
    {id:1, message:'Hi, how are you?',likeCount:2},
    {id:2, message:'thanks, i"m fine!',likeCount:1},
    {id:3, message:'Ok!!',likeCount:3},
    {id:4, message:'What about you?',likeCount:5},
  ]

    return <div className={s.posts}>
      <h3><div className={s.postsBlock}>myPosts</div></h3>
      <div className={s.item}>
          <div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
        <button>add post</button>
      </div>
      <div className={s.posts}>
        <Post message = {postData[0].message} likeCount={postData[0].likeCount}/>
        <Post message = {postData[1].message} likeCount={postData[1].likeCount}/>
        <Post message = {postData[2].message} likeCount={postData[2].likeCount}/>
        <Post message = {postData[3].message} likeCount={postData[3].likeCount}/>
      </div>
    </div>
}

export default MyPosts;
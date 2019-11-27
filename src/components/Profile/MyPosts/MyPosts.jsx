import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts =[
    {id:1, message:'Hi, how are you?',likeCount:2},
    {id:2, message:'thanks, i"m fine!',likeCount:1},
    {id:3, message:'Ok!!',likeCount:3},
    {id:4, message:'What?',likeCount:1},
    {id:5, message:'And about you?',likeCount:2},
    {id:6, message:'What about you?',likeCount:5}
  ]
  let postElements = posts
    .map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return <div className={s.posts}>
      <h3><div className={s.postsBlock}>myPosts</div></h3>
      <div className={s.item}>
          <div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
        <button>add post</button>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
}

export default MyPosts;
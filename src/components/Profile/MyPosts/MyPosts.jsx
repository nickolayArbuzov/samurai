import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

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
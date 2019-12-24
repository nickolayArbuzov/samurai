import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
  let newPostElement = React.createRef();
  let addPost = ()=>{
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value ='';
  }

    return <div className={s.posts}>
      <h3><div className={s.postsBlock}>myPosts</div></h3>
      <div className={s.item}>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
        <button onClick={addPost}>add post</button>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
}

export default MyPosts;
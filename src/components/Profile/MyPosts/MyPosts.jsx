import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from '../../../redux/state';
import {updateNewPostTextActionCreator} from '../../../redux/state';

const MyPosts = (props) => {
  
  let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return <div className={s.posts}>
    <h3><div className={s.postsBlock}>myPosts</div></h3>
    <div className={s.item}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>
      <button onClick={addPost}>add post</button>
    </div>
    <div className={s.posts}>
      {postElements}
    </div>
  </div>
}

export default MyPosts;
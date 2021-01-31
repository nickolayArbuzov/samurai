import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../assets/images/1200px-Smiley.svg.png';

const Post = (props) => {
    return <div className={s.item}>
        <img src={userPhoto}/>
        {props.message}
        <div>
          <span>like {props.likeCount}</span>
        </div>
      </div>
}

export default Post;
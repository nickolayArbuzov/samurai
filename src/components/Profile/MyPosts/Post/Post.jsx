import React from 'react';
import pro from './Post.module.css';

const Post = (props) => {
    return <div className={pro.item}>
        <img src="data:image/png;base64,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"/>
        {props.message}
        <div>
          <span>like</span>
        </div>
      </div>
}

export default Post;
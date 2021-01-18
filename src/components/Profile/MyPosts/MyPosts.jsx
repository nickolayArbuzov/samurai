import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return(
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost}/>  
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  ) 
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'} component={Textarea} placeholder={'Post Message'} 
              validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
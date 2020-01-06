import state from './redux/state';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';

let renderEntireTree = (state) =>{

    ReactDOM.render(<App state={state} 
                addPost={addPost}
                updateNewPostText={updateNewPostText}/>, 
                document.getElementById('root'));
}


renderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

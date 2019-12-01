import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './App';
import * as serviceWorker from './serviceWorker';

let posts =[
    {id:1, message:'Hi, how are you?',likeCount:2},
    {id:2, message:'thanks, i"m fine!',likeCount:1},
    {id:3, message:'Ok!!',likeCount:3},
    {id:4, message:'What?',likeCount:1},
    {id:5, message:'And about you?',likeCount:2},
    {id:6, message:'What about you?',likeCount:5}
]

let dialogsData = [
    {id:1,name:'Kolya'},
    {id:2,name:'Ujin'},
    {id:3,name:'Ira'},
    {id:4,name:'Maria'}
]

let messagesData = [
  {id:1,message:'Hi'},
  {id:2,message:'How are you'},
  {id:3,message:'Thanks!'}
]

ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

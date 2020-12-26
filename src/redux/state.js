import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer.js";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage:{
            posts: [
                {id:1, message:'Hi, how are you?',likeCount:2},
                {id:2, message:'thanks, i"m fine!',likeCount:1},
                {id:3, message:'Ok!!',likeCount:3},
                {id:4, message:'What?',likeCount:1},
                {id:5, message:'And about you?',likeCount:2},
                {id:6, message:'What about you?',likeCount:5}
            ],
            newPostText: "Введите текст"
        },
        dialogsPage:{  
            dialogsData:[
                {id:1,name:'Kolya'},
                {id:2,name:'Ujin'},
                {id:3,name:'Ira'},
                {id:4,name:'Maria'}
            ],
            messagesData:[
                {id:1,message:'Hi'},
                {id:2,message:'How are you'},
                {id:3,message:'Thanks!'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        alert('state change');
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

window.store = store;
export default store;


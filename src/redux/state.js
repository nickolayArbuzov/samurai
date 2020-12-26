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
        if(action.type === ADD_POST){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likeCount: 1
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText ='';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id:6, message:body});
            this._callSubscriber(this.state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});

window.store = store;
export default store;


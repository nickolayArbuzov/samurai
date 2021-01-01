const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {  
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
};

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.newText;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push({id:6, message:body});
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});

export default dialogsReducer;
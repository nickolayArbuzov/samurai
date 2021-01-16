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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state, 
                newMessageBody: action.newText
            };
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id:6, message:body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});

export default dialogsReducer;
import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {updateNewMessageBodyActionCreator} from '../../redux/state';
import {sendMessageActionCreator} from '../../redux/state';


const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageEelements = state.messagesData
        .map(m => <Message message={m.message} />);
    
    let newMessageBody = state.newMessageBody
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageEelements}</div>
                <div>
                    <div><textarea value={newMessageBody} 
                                    onChange={onNewMessageChange}
                                    placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
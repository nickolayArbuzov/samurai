import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogElements = state.dialogsData
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messageEelements = state.messagesData
        .map(m => <Message message={m.message} key={m.id}/>);
    
    let newMessageBody = state.newMessageBody
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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
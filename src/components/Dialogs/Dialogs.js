import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    
    let dialogElements = props.state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageEelements = props.state.messagesData
        .map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageEelements}
            </div>
        </div>
    )
}

export default Dialogs;
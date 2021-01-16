import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogElements = state.dialogsData
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messageEelements = state.messagesData
        .map(m => <Message message={m.message} key={m.id}/>);
    
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageEelements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={'newMessageBody'} component={'textarea'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
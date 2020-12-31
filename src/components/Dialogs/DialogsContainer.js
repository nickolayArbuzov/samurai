import React from 'react';
import {updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {sendMessageActionCreator} from '../../redux/dialogsReducer';
import storeContext from '../../storeContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return (
        <storeContext.Consumer> 
            {
            (store) => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {store.dispatch(sendMessageActionCreator());}
                let onNewMessageChange = (body) => {store.dispatch(updateNewMessageBodyActionCreator(body));}

                return <Dialogs updateNewMessageBody={onNewMessageChange} 
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
                }
            }
        </storeContext.Consumer>
    )
}

export default DialogsContainer;
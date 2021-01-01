import React from 'react';
import {updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {sendMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageActionCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
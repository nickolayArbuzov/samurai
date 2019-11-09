import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = "/Dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props)=>{
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Kolya" id="1"/>
                <DialogItem name="Ujin" id="2"/>
                <DialogItem name="Ira" id="3"/>
                <DialogItem name="Maria" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='Thanks!'/>
            </div>
        </div>
    )
}

export default Dialogs;
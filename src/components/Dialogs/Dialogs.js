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
    let dialogsData = [
        {id:1,name:'Kolya'},
        {id:2,name:'Ujin'},
        {id:3,name:'Ira'},
        {id:4,name:'Maria'}
    ]
    let dialogElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);
    
    let messagesData = [
        {id:1,message:'Hi'},
        {id:2,message:'How are you'},
        {id:3,message:'Thanks!'}
    ]
    let messageEelements = messagesData
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
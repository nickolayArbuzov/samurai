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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
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
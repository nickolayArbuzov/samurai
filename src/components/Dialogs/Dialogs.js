import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' +s.active}>
                    <NavLink to="/Dialogs/1">Kolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/2">Ujin</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/3">Ira</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/4">Vadik</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    Good day
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' +s.active}>
                    Kolya
                </div>
                <div className={s.dialog}>
                    Ujin
                </div>
                <div className={s.dialog}>
                    Ira
                </div>
                <div className={s.dialog}>
                    Vadik
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
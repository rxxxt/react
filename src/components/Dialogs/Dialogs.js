import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    Yo
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { props.dialogs }
            </div>
            <div className={s.messages}>
                { props.messages }
            </div>
        </div>
    );
}

export default Dialogs;
import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path="/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Valera" id="2" />
                <DialogItem name="Sveta" id="3" />
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;
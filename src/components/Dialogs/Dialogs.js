import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem photo={d.photo} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBady;
    let onSensMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={ newMessageBody }
                                  onChange={ onNewMessageChange }
                                  placeholder={'Enter your message'}/></div>
                    <div><button onClick={ onSensMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
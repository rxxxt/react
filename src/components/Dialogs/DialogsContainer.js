import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContex from "../../StoreContex";

const DialogsContainer = () => {
    return (
        <StoreContex.Consumer>
            {(store) => {
                let state = store.getState().messagesPage;
                let onSensMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSensMessageClick}
                                messagesPage={state}/>
            }
            }
        </StoreContex.Consumer>);
}

export default DialogsContainer;
const UPDATE_NEW_MESSAGE_BADY = 'UPDATE-NEW-MESSAGE-BADY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBady;
            state.newMessageBady = '';
            state.messages.push({id: 4, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BADY:
            state.newMessageBady = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BADY, body: body })

export default dialogsReducer;
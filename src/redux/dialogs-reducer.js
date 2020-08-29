const UPDATE_NEW_MESSAGE_BADY = 'UPDATE-NEW-MESSAGE-BADY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Dima"},
        {id: 2, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Valera"},
        {id: 3, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Sveta"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo:)"}
    ],
    newMessageBady: ''
}

const dialogsReducer = (state = initialState, action) => {
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
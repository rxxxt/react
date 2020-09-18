const SEND_MESSAGE = 'samurai-network/dialogs/SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",
            name: "Dima"
        },
        {
            id: 2,
            photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",
            name: "Valera"
        },
        {
            id: 3,
            photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg",
            name: "Sveta"
        }
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo:)"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessageBody}]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
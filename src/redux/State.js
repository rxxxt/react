const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BADY = 'UPDATE-NEW-MESSAGE-BADY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, how are you?", likeCounter: 15},
                {id: 2, post: "My first post", likeCounter: 20},
                {id: 3, post: "Hello World", likeCounter: 10},
                {id: 4, post: "Yo yo yo yo yo", likeCounter: 50}
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        siteBar: {
            friends: [
                {id: 1, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Dima"},
                {id: 2, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Valera"},
                {id: 3, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Sveta"}
            ]
        }
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState()  {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likeCounter: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let bady = this._state.messagesPage.newMessageBady;
            this._state.messagesPage.newMessageBady = '';
            this._state.messagesPage.messages.push({id: 4, message: bady});
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BADY) {
            this._state.messagesPage.newMessageBady = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BADY, body: body })

export default store;
window.store = store;
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        sideBar: {
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
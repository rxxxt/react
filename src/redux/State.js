let store = {
    __subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {

    },
    getState() {
        return this.state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    }
}

let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
    {id: 1, message: "Hi!", answer: "Yo:)"},
    {id: 2, message: "How are you?", answer: "I`m fine!"},
    {id: 3, message: "Yo:)", answer: "Hello"}
]
    },
    siteBar: {
        friends: [
            {id: 1, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Dima"},
            {id: 2, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Valera"},
            {id: 3, photo: "https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg", name: "Sveta"}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likeCounter: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
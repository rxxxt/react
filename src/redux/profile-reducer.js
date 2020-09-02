const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    profile: null,
    posts: [
        {id: 1, post: "Hi, how are you?", likeCounter: 15},
        {id: 2, post: "My first post", likeCounter: 20},
        {id: 3, post: "Hello World", likeCounter: 10},
        {id: 4, post: "Yo yo yo yo yo", likeCounter: 50}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, post: state.newPostText, likeCounter: 0};
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export default profileReducer;
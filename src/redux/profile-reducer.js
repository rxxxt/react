import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    posts: [
        {id: 1, post: "Hi, how are you?", likeCounter: 15},
        {id: 2, post: "My first post", likeCounter: 20},
        {id: 3, post: "Hello World", likeCounter: 10},
        {id: 4, post: "Yo yo yo yo yo", likeCounter: 50}
    ],
    newPostText: '',
    status: "Hello my Friends"
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
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setProfile = (userId) => {
    return (dispatch) => {
        usersAPI.setProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            });
    }
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
            dispatch(setStatus(status));
        });
}

export default profileReducer;
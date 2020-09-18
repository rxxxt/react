import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'samurai-network/profile/ADD-POST';
const SET_USERS_PROFILE = 'samurai-network/profile/SET_USERS_PROFILE';
const SET_STATUS = 'samurai-network/profile/SET_STATUS';
const DELETE_POST = 'samurai-network/profile/DELETE_POST';
const SAVE_PHOTO = 'samurai-network/profile/SAVE_PHOTO';

let initialState = {
    profile: null,
    posts: [
        {id: 1, post: "Hi, how are you?", likeCounter: 15},
        {id: 2, post: "My first post", likeCounter: 20},
        {id: 3, post: "Hello World", likeCounter: 10},
        {id: 4, post: "Yo yo yo yo yo", likeCounter: 50}
    ],
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, post: action.newPostText, likeCounter: 0};
            return {...state, posts: [...state.posts, newPost]};
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        }
        case SAVE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        default:
            return state;
    }
}
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})

export const setProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(setProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;
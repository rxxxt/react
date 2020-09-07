import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';

let initialState = {
    email: null,
    password: null,
    rememberMe: false,
    userId: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case SET_LOGIN:
            return {...state, ...action.data}
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setAuthLogin = (email, password, rememberMe) => ({type: SET_LOGIN, data: {email, password, rememberMe}})

export const auth = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, password, rememberMe} = response.data.data;
                    dispatch(setAuthLogin(email, password, rememberMe));
                }
            });
    }
}

export default authReducer;
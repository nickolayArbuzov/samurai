import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {  
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA: 
            return {
                ...state, 
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});
export const getAuthUserData = () => (dispatch) => {
    return authAPI.isAuth().then(data => {
        let {id, email, login} = data.data;
        if(data.resultCode === 0){
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if(data.resultCode === 0){
            dispatch(getAuthUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    });
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if(data.resultCode === 0){
            dispatch(getAuthUserData(null, null, null, false))
        }
    });
}
export default authReducer;
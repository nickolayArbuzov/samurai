import { authAPI } from '../api/api';
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {  
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA: 
            return {
                ...state, 
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => (dispatch) => {
    authAPI.isAuth().then(data => {
        let {id, email, login} = data.data;
        if(data.resultCode === 0){
            dispatch(setAuthUserData(id, email, login));
        }
    });
}
export default authReducer;
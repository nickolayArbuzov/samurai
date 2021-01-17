import { profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id:1, message:'Hi, how are you?',likeCount:2},
        {id:2, message:'thanks, i"m fine!',likeCount:1},
        {id:3, message:'Ok!!',likeCount:3},
        {id:4, message:'What?',likeCount:1},
        {id:5, message:'And about you?',likeCount:2},
        {id:6, message:'What about you?',likeCount:5}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: 
            let newPost = {
            id: 7,
            message: action.newPostText,
            likeCount: 1
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0){
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;
import { profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

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
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }    
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0){
        dispatch(setStatus(status));
    }
}

export default profileReducer;
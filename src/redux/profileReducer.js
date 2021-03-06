import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

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
                profile: action.profile
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS: 
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }     
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

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
    if (response.data.resultCode === 0){
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
    } else{
        let errorObject = (response.data.messages[0]
                        .slice(
                            response.data.messages[0].indexOf('(')+1,
                            response.data.messages[0].indexOf('-'))
                        )
                        .toLowerCase();
        let errorMessage = (response.data.messages[0]
                        .slice(
                            response.data.messages[0].indexOf('>')+1,
                            response.data.messages[0].indexOf(')'))
                        )
                        .toLowerCase();
        dispatch(
            stopSubmit(
                'edit-profile', 
                //{'contacts': {'facebook': response.data.messages[0]}}
                {errorObject: {errorMessage: response.data.messages[0]}}
            )
        );
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;
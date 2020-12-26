const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id:1, message:'Hi, how are you?',likeCount:2},
        {id:2, message:'thanks, i"m fine!',likeCount:1},
        {id:3, message:'Ok!!',likeCount:3},
        {id:4, message:'What?',likeCount:1},
        {id:5, message:'And about you?',likeCount:2},
        {id:6, message:'What about you?',likeCount:5}
    ],
    newPostText: "Введите текст"
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: 
            let newPost = {
            id: 7,
            message: state.newPostText,
            likeCount: 1
            }
            state.posts.push(newPost);
            state.newPostText ='';
            return state;

        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
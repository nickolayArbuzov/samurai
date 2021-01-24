import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
    posts: [
        {id:1, message:'Hi, how are you?',likeCount:2},
        {id:2, message:'thanks, i"m fine!',likeCount:1},
        {id:3, message:'Ok!!',likeCount:3},
        {id:4, message:'What?',likeCount:1},
        {id:5, message:'And about you?',likeCount:2},
        {id:6, message:'What about you?',likeCount:5}
    ],
};

it('length of post should be incremented', () => {
    let action = addPostActionCreator('it-be');
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(7);
});

it('new post added in array', () => {
    let action = addPostActionCreator('it-be');
    let newState = profileReducer(state,action);
    expect(newState.posts[6].message).toBe('it-be');
});

it('after delete message length of posts should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
});

it('after delete message length of post should not decremented if id is incorrect', () => {
    let action = deletePost(100);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(6);
});


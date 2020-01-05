import { renderEntireTree } from "../render";

let state = {
    profilePage:{
        posts: [
            {id:1, message:'Hi, how are you?',likeCount:2},
            {id:2, message:'thanks, i"m fine!',likeCount:1},
            {id:3, message:'Ok!!',likeCount:3},
            {id:4, message:'What?',likeCount:1},
            {id:5, message:'And about you?',likeCount:2},
            {id:6, message:'What about you?',likeCount:5}
        ],
        newPostText: "it-kamasutra.com"
    },
    dialogsPage:{
        dialogsData:[
            {id:1,name:'Kolya'},
            {id:2,name:'Ujin'},
            {id:3,name:'Ira'},
            {id:4,name:'Maria'}
        ],
        messagesData:[
            {id:1,message:'Hi'},
            {id:2,message:'How are you'},
            {id:3,message:'Thanks!'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
};

export default state;
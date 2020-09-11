import React from "react";
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, post: "Hi, how are you?", likeCounter: 15},
        {id: 2, post: "My first post", likeCounter: 20},
        {id: 3, post: "Hello World", likeCounter: 10},
        {id: 4, post: "Yo yo yo yo yo", likeCounter: 50}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPost("Hello!");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = addPost("Hello!");
    let newState = profileReducer(state, action);

    expect(newState.posts[4].post).toBe("Hello!");
});

test('after deleting length of posts should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});
import React from 'react';
import c from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={c.item}>
            My post
            <div className={c.item}>
                <Post message='Hi, how are you?' like='15' />
                <Post message='My first post' like='20' />
            </div>
        </div>
    );
}

export default MyPost;
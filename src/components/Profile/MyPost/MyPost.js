import React from 'react';
import c from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={c.item}>
            My post
            <div className={c.item}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPost;
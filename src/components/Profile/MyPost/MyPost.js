import React from 'react';
import c from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.post}>
                <Post message='Hi, how are you?' like='15'/>
                <Post message='My first post' like='20'/>
            </div>
        </div>
    );
}

export default MyPost;
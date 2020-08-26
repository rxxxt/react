import React from 'react';
import c from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postData = [
        {id: 1, post: "Hi, how are you?", likeCounter: 15},
        {id: 2, post: "My first post", likeCounter: 20}
    ]

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
                <Post message={postData[0].post} like={postData[0].likeCounter}/>
                <Post message={postData[1].post} like={postData[1].likeCounter}/>
            </div>
        </div>
    );
}

export default MyPost;
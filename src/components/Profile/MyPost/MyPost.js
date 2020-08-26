import React from 'react';
import c from './MyPost.module.css';

const MyPost = (props) => {
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
                { props.posts }
            </div>
        </div>
    );
}

export default MyPost;
import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src='https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.like}
            </div>
        </div>
    );
}

export default Post;
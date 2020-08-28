import React from 'react';
import c from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} like={p.likeCounter}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={c.post}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;
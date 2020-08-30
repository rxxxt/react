import React from 'react';
import c from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
debugger;
    let postsElements = props.posts.map(p => <Post message={p.post} like={p.likeCounter}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={c.post}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;
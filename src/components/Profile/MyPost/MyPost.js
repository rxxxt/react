import React from "react";
import c from "./MyPost.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPost = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.post} like={p.likeCounter}/>);

    let AddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <AddPostFormRedux onSubmit={AddPost}/>
            <div className={c.post}>
                {postsElements}
            </div>
        </div>
    );
}

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={'Post message'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(MyPostForm);

export default MyPost;
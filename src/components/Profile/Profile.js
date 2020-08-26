import React from 'react';
import c from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (<div>
        <ProfileInfo/>
        <MyPost posts={props.state.posts}/>
    </div>);
}

export default Profile;
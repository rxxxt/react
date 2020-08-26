import React from 'react';
import c from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (postsElements) => {
    return (<div>
        <ProfileInfo />
        <MyPost />
    </div>);
}

export default Profile;
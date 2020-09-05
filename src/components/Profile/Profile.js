import React from "react";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (<div>
        <ProfileInfo profile={props.profile}/>
        <MyPostContainer/>
    </div>);
}

export default Profile;
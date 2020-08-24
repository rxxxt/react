import React from 'react';
import c from './Profile.module.css';
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (<div className={c.content}>
        <div className={c.item}>
            <img src='https://i.ytimg.com/vi/kdWwvE3wFaE/maxresdefault_live.jpg'/>
        </div>
        <div className={c.item}>
            ava + description
        </div>
        <MyPost/>
    </div>);
}

export default Profile;
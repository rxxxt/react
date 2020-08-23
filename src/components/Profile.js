import React from 'react';
import c from './Profile.module.css';
import b from "./Navbar.module.css";

const Profile = () => {
    return (<div className={c.content}>
        <div className={c.item}>
            <img src='https://i.ytimg.com/vi/kdWwvE3wFaE/maxresdefault_live.jpg'/>
        </div>
        <div className={c.item}>
            ava + description
        </div>
        <div className={c.item}>
            My post
            <div className={c.item}>
                New post
            </div>
            <div className={c.item}>
                <div className={c.item}>
                    post 1
                </div>
                <div className={c.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>);
}
export default Profile;
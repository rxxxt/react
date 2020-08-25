import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={c.item}>
                <img src='https://i.ytimg.com/vi/kdWwvE3wFaE/maxresdefault_live.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
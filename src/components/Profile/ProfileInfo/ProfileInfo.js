import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={c.item}>
                <img src='https://sun9-35.userapi.com/M9K-ZYqiyZlScM1k_sLis88eLKv-vHpCmrmgGg/JRr21OHal50.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
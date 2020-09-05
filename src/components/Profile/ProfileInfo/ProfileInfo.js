import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={c.item}>
                <img src='https://sun9-35.userapi.com/M9K-ZYqiyZlScM1k_sLis88eLKv-vHpCmrmgGg/JRr21OHal50.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
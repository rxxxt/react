import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../assets/img/userPhoto.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                {profile.fullName}
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    );
}

export default ProfileInfo;
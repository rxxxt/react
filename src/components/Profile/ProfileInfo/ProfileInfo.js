import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../assets/img/userPhoto.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>
                    {profile.fullName}
                </div>
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    );
}

export default ProfileInfo;
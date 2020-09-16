import React from "react";
import c from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={c.formSummaryError}>{error}</div>}
        <div>
            <b>Full name</b>: <Field placeholder={"Full name"} name={"fullName"} component={Input}/>
        </div>
        <div>
            <b>Looking for a job</b>: <Field component={Input} name={"lookingForAJob"} type={"checkbox"}/>
        </div>
        <div>
            <b>My professional skills</b>: <Field placeholder={"My professional skills"}
                                                  name={"lookingForAJobDescription"} component={Textarea}/>
        </div>
        <div>
            <b>About me</b>: <Field placeholder={"About me"} name={"aboutMe"} component={Textarea}/>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={c.contact}>
                <b>{key}</b>: <Field placeholder={key} name={"contacts." + key} component={Input}/>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;

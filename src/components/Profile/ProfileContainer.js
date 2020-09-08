import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.isAuth) {
            userId = this.props.authorizedUserId;
        } if (!userId) {
                this.props.history.push("/login");
            }
        this.props.setProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (<Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {setProfile, getUserStatus, updateStatus}),
    withRouter
)(ProfileContainer);
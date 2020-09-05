import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setUsersProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />;

        return (<Profile profile={this.props.profile}/>);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile, setProfile})(WithUrlDataContainerComponent);
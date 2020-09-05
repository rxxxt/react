import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId);
    }

    render() {
        return (<Profile profile={this.props.profile}/>);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile, setProfile})(WithUrlDataContainerComponent);
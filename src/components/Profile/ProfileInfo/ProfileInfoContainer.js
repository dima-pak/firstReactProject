import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        informationAboutUser: state.profile.informationAboutUser
    }
}
const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;
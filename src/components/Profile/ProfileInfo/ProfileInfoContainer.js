import React from "react";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = (props) => {
    let informationAboutUser = props.store.getState().profile.informationAboutUser;

    return (<ProfileInfo informationAboutUser={informationAboutUser}/>);
}

export default ProfileInfoContainer;
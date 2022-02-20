import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (<div className={s.backProfile}>
        <ProfileInfo informationAboutUser={props.profile.informationAboutUser}/>
        <MyPosts posts={props.profile} newTextArea={props.profile.newTextArea} dispatch={props.dispatch}/>
    </div>)
}


export default Profile;
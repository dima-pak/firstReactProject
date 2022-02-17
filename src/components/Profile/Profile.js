import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (<div>
        <ProfileInfo informationAboutUser={props.profile.informationAboutUser}/>
        <MyPosts posts={props.profile} addPost={props.addPost} newTextArea={props.profile.newTextArea} changeTextArea={props.changeTextArea}/>
    </div>)
}


export default Profile;
import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {

    return (<div className={s.backProfile}>
        <ProfileInfoContainer/>
        <MyPostsContainer />
    </div>)
}


export default Profile;
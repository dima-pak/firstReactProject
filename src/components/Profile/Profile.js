import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={s.content}>
        <div>
            <img
                src='https://www.momondo.by/rimg/dimg/05/fd/515362c8-lm-3638-165cdb13a57.jpg?width=1366&height=768&xhint=2017&yhint=1499&crop=true'
                width='100%' height='400px'/>
        </div>
        <div>
            <img src='https://memepedia.ru/wp-content/uploads/2022/01/virgo-cat-meme-1.jpg' width='200px'
                 height='200px'/>
            avatar + description ПРОВЕРКА
        </div>
        <MyPosts/>
    </div>)
}
export default Profile;
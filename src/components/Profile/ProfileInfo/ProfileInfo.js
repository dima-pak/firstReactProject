import React from "react";
import s from "./ProfileInfo.module.css";
import profile from "../Profile";

const ProfileInfo = (props) => {
    return (
        <div className={s.blockProfileInfo}>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2019/03/21/19/35/wave-4071758_960_720.jpg"
                    //src='https://www.momondo.by/rimg/dimg/05/fd/515362c8-lm-3638-165cdb13a57.jpg?width=1366&height=768&xhint=2017&yhint=1499&crop=true'
                    width='100%' height='400px'/>
            </div>
            <div className={s.blockAvatarAndDescription}>
                <div className={s.avatar}>
                    <img src='https://memepedia.ru/wp-content/uploads/2022/01/virgo-cat-meme-1.jpg'/>
                </div>
                <div className={s.description}>
                    <div>Имя: {props.informationAboutUser.firstName}</div>
                    <div>Фамилия: {props.informationAboutUser.surname}</div>
                    <div>Возраст: {props.informationAboutUser.age}</div>
                    <div>О себе: {props.informationAboutUser.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
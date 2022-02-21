import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.blockProfileInfo}>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2019/03/21/19/35/wave-4071758_960_720.jpg"
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
import React from "react";
import s from "./User.module.css";

const User = (props) => {
    return (
        <div className={s.mainBlock}>
            <div className={s.leftBlock}>
                <img className={s.image}
                     src="https://sun9-4.userapi.com/impg/u3fbgLqIJwuAr5pOYIGsyhuPgJ6zpe6D0fvhWg/7BpH-EEU4U8.jpg?size=1280x720&quality=96&sign=d45596348489949c78242492431c41f1&type=album"/>
                {props.followed ? <button onClick={() => {
                    props.follow(props.id)
                }}>Follow</button> : <button onClick={() => {
                    props.unfollow(props.id)
                }}>Unfollow</button>}
            </div>
            <div className={s.rightBlock}>
                <div className={s.name}>
                    {props.fullName}
                </div>
                <div className={s.status}>
                    {props.status}
                </div>
                <div className={s.country}>
                    {props.location.country}
                </div>
                <div className={s.city}>
                    {props.location.city}
                </div>
            </div>
        </div>
    );
}

export default User;
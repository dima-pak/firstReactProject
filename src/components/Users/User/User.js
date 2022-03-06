import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={s.mainBlock}>
            <div className={s.leftBlock}>
                <NavLink  to={`/profile/${props.id}`} className={s.navBlock}>
                <img className={s.image}
                     src={props.image}/>
                </NavLink>
                {props.followed ? <button onClick={() => {
                    props.follow(props.id)
                }}>Follow</button> : <button onClick={() => {
                    props.unFollow(props.id)
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
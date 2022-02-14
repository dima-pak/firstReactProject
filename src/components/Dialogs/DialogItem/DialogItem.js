import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src="https://cdn.discordapp.com/attachments/651512554496983057/942769359217106964/zvezda.png"/>
            <NavLink className={s.navLink} to={"dialog/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
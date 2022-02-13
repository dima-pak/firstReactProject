import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name="dima" id="1"/>
            <DialogItem name="benis" id="2"/>
        </div>
        <div className={s.messages}>
            <Message message="hello"/>
            <Message message="wait"/>
            <Message message="why"/>
            <Message message="mmm nice"/>
        </div>
    </div>)
}

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink className={s.navLink} to={"dialog/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Dialogs;
import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsElement.dialogs.map((d) => (<DialogItem id={d.id} name={d.name}/>))
    let messagesElement = props.dialogsElement.messages.map((m) => (<Message message={m.message}/>))

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messagesElement}
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
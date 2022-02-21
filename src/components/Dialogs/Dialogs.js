import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {props.dialogsElement}
        </div>
        <div className={s.messages}>
            {props.messagesElement}
            <div className={s.blockAddMessage}>
                <textarea onChange={props.changeTextMessage}
                          value={props.textAreaMessage}
                          placeholder="Ведите сообщение"/>
                <button onClick={props.addMessage}>Add message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs;
import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsElement.map((d) => (<DialogItem id={d.id} name={d.name}/>))

    let messagesElement = props.messagesElement.map((m) => (
        <Message message={m.message} senderActive={m.senderActive}/>))

    let addMessage = () => {
        props.addMessage();
    }

    let changeTextMessage = (event) => {
        props.changeTextMessage(event.target.value);
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messagesElement}
            <div className={s.blockAddMessage}>
                <textarea onChange={changeTextMessage}
                          value={props.textAreaMessage}
                          placeholder="Ведите сообщение"/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs;
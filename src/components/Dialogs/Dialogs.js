import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreate, changeTextMessageActionCreate} from "../../Redux/dialogsElementReducer";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsElement.dialogs.map((d) => (<DialogItem id={d.id} name={d.name}/>))
    let messagesElement = props.dialogsElement.messages.map((m) => (
        <Message message={m.message} senderActive={m.senderActive}/>))

    let addMessage = () => {
        props.dispatch(addMessageActionCreate());
    }

    let changeTextMessage = (event) => {
        props.dispatch(changeTextMessageActionCreate(event.target.value));
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messagesElement}
            <div className={s.blockAddMessage}>
                <textarea onChange={changeTextMessage}
                          value={props.dialogsElement.textAreaMessage}
                          placeholder="Ведите сообщение"/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs;
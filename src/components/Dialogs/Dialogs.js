import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsElement.dialogs.map((d) => (<DialogItem id={d.id} name={d.name}/>))
    let messagesElement = props.dialogsElement.messages.map((m) => (
        <Message message={m.message} senderActive={m.senderActive}/>))

    let newTextFromMessage = React.createRef();

    let addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"});
    }

    let changeTextMessage = () => {
        props.dispatch({type: "CHANGE-TEXT-AREA-MESSAGE", message: newTextFromMessage.current.value});
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messagesElement}
            <div className={s.blockAddMessage}>
                <textarea ref={newTextFromMessage} onChange={changeTextMessage} value={props.dialogsElement.textAreaMessage}>Введите текст</textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs;
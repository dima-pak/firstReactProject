import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsElement.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);

    let messagesElement = props.messagesElement.map(m => <Message key={m.id} message={m.message}
                                                                  senderActive={m.senderActive}/>);

    let addMessage = (value) => {
        props.addMessageActionCreate(value.textAreaMessage);
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>

            {messagesElement}

            <AddMessageFromRedux onSubmit={addMessage}/>

        </div>
    </div>)
}

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.blockAddMessage}>
                <Field component="textarea" name="textAreaMessage" placeholder="Enter you message"/>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFromRedux = reduxForm({form: "dialogAddMessageForm"})(addMessageForm);

export default Dialogs;
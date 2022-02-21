import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreate, changeTextMessageActionCreate} from "../../Redux/dialogsElementReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsElement;

    let textAreaMessage = state.textAreaMessage;

    let dialogsElement = state.dialogs.map((d) => (<DialogItem id={d.id} name={d.name}/>))
    let messagesElement = state.messages.map((m) => (
        <Message message={m.message} senderActive={m.senderActive}/>))

    let addMessage = () => {
        props.dispatch(addMessageActionCreate());
    }

    let changeTextMessage = (event) => {
        props.dispatch(changeTextMessageActionCreate(event.target.value));
    }

    return (<Dialogs dialogsElement={dialogsElement} messagesElement={messagesElement}
                     addMessage={addMessage} changeTextMessage={changeTextMessage}
                     textAreaMessage={textAreaMessage}/>);
}

export default DialogsContainer;
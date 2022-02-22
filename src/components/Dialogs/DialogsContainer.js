import React from "react";
import {addMessageActionCreate, changeTextMessageActionCreate} from "../../Redux/dialogsElementReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapToStateProps = (state) => {
    return {
        dialogsElement: state.dialogsElement.dialogs,
        messagesElement: state.dialogsElement.messages,
        textAreaMessage: state.dialogsElement.textAreaMessage
    }
}

let mapToDispatchProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreate())
        },
        changeTextMessage: (body) => {
            dispatch(changeTextMessageActionCreate(body))
        }
    }
}

const DialogsContainer = connect(mapToStateProps, mapToDispatchProps)(Dialogs);

export default DialogsContainer;
import React from "react";
import {addMessageActionCreate} from "../../Redux/dialogsElementReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapToStateProps = (state) => {
    return {
        dialogsElement: state.dialogsElement.dialogs,
        messagesElement: state.dialogsElement.messages,
    }
}

const DialogsContainer = connect(mapToStateProps, {addMessageActionCreate})(Dialogs);

export default DialogsContainer;
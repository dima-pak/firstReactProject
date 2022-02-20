const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_TEXT_AREA_MESSAGE = "CHANGE-TEXT-AREA-MESSAGE";

const dialogsElementReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                message: state.textAreaMessage,
                senderActive: false
            };
            state.messages.push(message);
            state.textAreaMessage = "";
            return state;
        case CHANGE_TEXT_AREA_MESSAGE:
            state.textAreaMessage = action.message;
            return state;
        default:
            return state;
    }
}

export let addMessageActionCreate = () => {
    return {type: ADD_MESSAGE}
}

export let changeTextMessageActionCreate = (message) => {
    return {type: CHANGE_TEXT_AREA_MESSAGE, message: message}
}

export default dialogsElementReducer;
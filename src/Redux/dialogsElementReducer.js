const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_TEXT_AREA_MESSAGE = "CHANGE-TEXT-AREA-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "dima"},
        {id: 2, name: "andruxa"},
        {id: 3, name: "valera"}
    ],
    messages: [
        {message: "hello", senderActive: true},
        {message: "you NIGGER?", senderActive: false},
        {message: "honk honk", senderActive: true},
        {message: "hi nigger", senderActive: false},
        {message: "AAAAAAAAAAAAAA", senderActive: true}
    ],

    textAreaMessage: "enter text"
};

const dialogsElementReducer = (state = initialState, action) => {
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
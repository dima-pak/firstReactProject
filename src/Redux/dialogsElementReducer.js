const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_TEXT_AREA_MESSAGE = "CHANGE-TEXT-AREA-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "dima"},
        {id: 2, name: "andruxa"},
        {id: 3, name: "valera"}
    ],
    messages: [
        {id: 1, message: "hello", senderActive: true},
        {id: 2, message: "you NIGGER?", senderActive: false},
        {id: 3, message: "honk honk", senderActive: true},
        {id: 4, message: "hi nigger", senderActive: false},
        {id: 5,message: "AAAAAAAAAAAAAA", senderActive: true}
    ],
};

const dialogsElementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 6,message: action.textAreaMessage, senderActive: false}],
            }
        }
        default:
            return state;
    }
}

export let addMessageActionCreate = (textAreaMessage) => {
    return {type: ADD_MESSAGE, textAreaMessage}
}

export default dialogsElementReducer;
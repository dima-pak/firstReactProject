const ADD_POST = "ADD-POST";
const CHANGE_TEXT_AREA = "CHANGE-TEXT-AREA";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                message: state.newTextArea,
                like: 0
            }
            state.posts.push(post);
            state.newTextArea = "";
            return state;
        case CHANGE_TEXT_AREA:
            state.newTextArea = action.message;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let changeTextAreaActionCreator = (message) => {
    return {type: CHANGE_TEXT_AREA, message: message}
}

export default profileReducer;
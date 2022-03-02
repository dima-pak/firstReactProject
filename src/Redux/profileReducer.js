const ADD_POST = "ADD-POST";
const CHANGE_TEXT_AREA = "CHANGE-TEXT-AREA";

let initialState = {
    informationAboutUser: {
        firstName: "chmona",
        surname: "usec",
        age: "23",
        aboutMe: "^_^ SIMP SIMP SIMP"
    },

    posts: [
        {id: 1, message: "Hi, how are you?", like: 5},
        {id: 2, message: "It's my first post+_+", like: 21},
        {id: 3, message: "NIGGER", like: 999999},
        {id: 4, message: "^_^ he-he nigger", like: 152}
    ],

    newTextArea: "enter text"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5,message: state.newTextArea, like: 0}],
                newTextArea: ""
            }
        }
        case CHANGE_TEXT_AREA: {
            return {
                ...state,
                newTextArea: action.message
            }
        }
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
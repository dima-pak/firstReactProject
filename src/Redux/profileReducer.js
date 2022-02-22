const ADD_POST = "ADD-POST";
const CHANGE_TEXT_AREA = "CHANGE-TEXT-AREA";

let initialState = {
    informationAboutUser: {
        firstName: "chmona",
        surname: "usec",
        age: "21",
        aboutMe: "^_^ SIMP SIMP SIMP"
    },

    posts: [
        {message: "Hi, how are you?", like: 5},
        {message: "It's my first post+_+", like: 21},
        {message: "NIGGER", like: 999999},
        {message: "^_^ he-he nigger", like: 152}
    ],

    newTextArea: "enter text"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{

            let newPost = {
                message: state.newTextArea,
                like: 0
            };

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newTextArea = "";
            return stateCopy;
        }
        case CHANGE_TEXT_AREA: {
            let stateCopy = {...state};
            stateCopy.newTextArea = action.message;
            return stateCopy;
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
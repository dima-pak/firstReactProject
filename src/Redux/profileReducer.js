const ADD_POST = "ADD-POST";

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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5,message: action.newTextArea, like: 0}],
            }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (newTextArea) => {
    return {type: ADD_POST, newTextArea}
}

export default profileReducer;
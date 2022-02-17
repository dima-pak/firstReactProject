import {renderEntireThree} from "../Render/render";

let state = {
    profile: {
        informationAboutUser: {
            firstName: "cacke",
            surname: "yciha",
            age: "21",
            aboutMe: "hehe nigger"
        },

        posts: [
            {message: "Hi, how are you?", like: 5},
            {message: "It's my first post+_+", like: 21},
            {message: "NIGGER", like: 999999},
            {message: "^_^ he-he nigger", like: 152}
        ],

        newTextArea: "enter text"
    },
    dialogsElement: {
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
    },

}

export let addPost = () => {

    let post = {
        message: state.profile.newTextArea,
        like: 0
    }
    state.profile.posts.push(post);
    changeTextArea("");
}

export let changeTextArea = (message) => {
    state.profile.newTextArea = message;
    renderEntireThree(state);
}

export let addMessage = () => {
    let message = {
        message: state.dialogsElement.textAreaMessage,
        senderActive: false
    };
    state.dialogsElement.messages.push(message);
    changeTextAreaMessage("");
}

export let changeTextAreaMessage = (message) => {
    state.dialogsElement.textAreaMessage = message;
    renderEntireThree(state);
}

export default state;
import profileReducer from "./profileReducer";
import dialogsElementReducer from "./dialogsElementReducer";

let store = {
    _renderEntireThree() {
    },
    _state: {
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
        }

    },

    getState() {
        return this._state;
    },

    changeTextArea(message) {
        this._state.profile.newTextArea = message;
        this._renderEntireThree(this._state);
    },

    changeTextAreaMessage(message) {
        this._state.dialogsElement.textAreaMessage = message;
        this._renderEntireThree(this._state);
    },

    updateRender(render) {
        this._renderEntireThree = render;
    },

    dispatch(action) {
        store._state.profile = profileReducer(store._state.profile, action);
        store._state.dialogsElement = dialogsElementReducer(store._state.dialogsElement, action);

        this._renderEntireThree(this._state);
    }
}

export default store;
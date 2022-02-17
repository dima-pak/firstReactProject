import ReactDOM from "react-dom";
import App from "../App";
import {addPost, changeTextArea, addMessage, changeTextAreaMessage} from "../Redux/state";
import React from "react";

export let renderEntireThree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} changeTextArea={changeTextArea} addMessage={addMessage} changeTextAreaMessage={changeTextAreaMessage}/>, document.getElementById('root'));
}
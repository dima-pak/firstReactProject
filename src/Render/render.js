import ReactDOM from "react-dom";
import App from "../App";
import {addPost} from "../Redux/state";
import React from "react";

export let renderEntireThree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
}
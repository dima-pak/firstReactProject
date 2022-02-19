import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireThree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={store.addPost.bind(store)}
                         changeTextArea={store.changeTextArea.bind(store)}
                         addMessage={store.addMessage.bind(store)}
                         changeTextAreaMessage={store.changeTextAreaMessage.bind(store)}/>,
        document.getElementById('root'));
}

renderEntireThree(store.getState());
store.updateRender(renderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

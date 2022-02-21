import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import store from "./Redux/store";
import store from "./Redux/redux-store"
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireThree = (state) => {
    ReactDOM.render(<App state={state}
                         dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
}

renderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireThree(state);
});
//store.updateRender(renderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

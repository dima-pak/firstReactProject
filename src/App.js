import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (<div className="app-wrapper">
        <div className="app-wrapperHeader">
            <Header/>
        </div>

        <div className="app-wrapperNav">
            <Nav/>
        </div>

        <div className="app-wrapperContent">
            {/*<Profile/>*/}
            <Dialogs/>
        </div>

    </div>);
}

export default App;

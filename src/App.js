import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    return (<BrowserRouter>
            <div className="app-wrapper">
                <div className="app-wrapperHeader">
                    <Header/>
                </div>

                <div className="app-wrapperNav">
                    <Nav/>
                </div>

                <div className="app-wrapperContent">
                    <Routes>
                        <Route path="/dialogs"
                               element={<DialogsContainer/>}/>
                        <Route path="/profile"
                               element={<Profile/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

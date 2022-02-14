import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {


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
                        <Route path="/dialogs" element={<Dialogs dialogsElement={props.state.dialogsElement}/>}/>
                        <Route path="/profile" element={<Profile profile={props.state.profile}/>}/>
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

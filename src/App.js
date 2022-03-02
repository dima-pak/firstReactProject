import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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

                    <Route path="/dialogs"
                        // element={<DialogsContainer/>}/>
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                        // element={<Profile/>}/>
                           render={() => <Profile/>}/>
                    <Route path="/users"
                        // element={<UsersContainer/>}/>
                           render={() => <UsersContainer/>}/>
                    <Route path="/news"
                        // element={<News/>}/>
                           render={() => <News/>}/>
                    <Route path="/music"
                        // element={<Music/>}/>
                           render={() => <Music/>}/>
                    <Route path="/settings"
                        // element={<Settings/>}/>
                           render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

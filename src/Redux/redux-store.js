import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsElementReducer from "./dialogsElementReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogsElement: dialogsElementReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
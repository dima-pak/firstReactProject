import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsElementReducer from "./dialogsElementReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogsElement: dialogsElementReducer
});

let store = createStore(reducers);

export default store;
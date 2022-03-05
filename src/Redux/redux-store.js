import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsElementReducer from "./dialogsElementReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogsElement: dialogsElementReducer,
    usersPage: usersReducer,
    authReducer: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
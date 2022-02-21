import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, changeTextAreaActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profile;

    let postsElements = state.posts.map((p) => (<Post message={p.message} like={p.like}/>))

    let newTextArea = state.newTextArea;

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changeTextArea = (event) => {
        props.dispatch(changeTextAreaActionCreator(event.target.value));
    }

    return (
        <MyPosts posts={postsElements} addPost={addPost} changeTextArea={changeTextArea} newTextArea={newTextArea}/>);
}

export default MyPostsContainer;
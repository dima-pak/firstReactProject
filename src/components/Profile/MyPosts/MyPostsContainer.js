import React from "react";
import {addPostActionCreator, changeTextAreaActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newTextArea: state.profile.newTextArea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changeTextArea: (body) => {
            dispatch(changeTextAreaActionCreator(body))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
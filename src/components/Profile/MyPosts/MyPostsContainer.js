import React from "react";
import {addPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostsContainerAPI extends React.Component {

    render() {
        return <MyPosts posts={this.props.posts}
                        addPost={this.props.addPostActionCreator}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newTextArea: state.profile.newTextArea
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPostsContainerAPI);

export default MyPostsContainer;
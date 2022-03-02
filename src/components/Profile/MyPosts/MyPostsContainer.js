import React from "react";
import {addPostActionCreator, changeTextAreaActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostsContainerAPI extends React.Component {

    render() {
        return <MyPosts posts={this.props.posts}
                        newTextArea={this.props.newTextArea}
                        addPost={this.props.addPostActionCreator}
                        changeTextArea={this.props.changeTextAreaActionCreator}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newTextArea: state.profile.newTextArea
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPostActionCreator,
    changeTextAreaActionCreator
})(MyPostsContainerAPI);

export default MyPostsContainer;
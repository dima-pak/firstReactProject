import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>);

    let addPost = (value) => {
        props.addPost(value.newMessageBody);
    }

    return (
        <div className={s.blockMyPosts}>
            <div className={s.start}>My posts</div>
            <AddMessageFromRedux onSubmit={addPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className={s.addComment}>
            <Field component="textarea" name="newMessageBody" placeholder="Enter you message"/>
            <button>Add post</button>
        </div>
        </form>
    )
}

const AddMessageFromRedux = reduxForm({form: "dialogAddPostForm"})(addPostForm);

export default MyPosts;
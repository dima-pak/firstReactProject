import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>);

    let addPost = () => {
        props.addPost();
    }

    let changeTextArea = (event) => {
        props.changeTextArea(event.target.value);
    }

    return (
        <div className={s.blockMyPosts}>
            <div className={s.start}>My posts</div>
            <div className={s.addComment}>
                <textarea value={props.newTextArea} onChange={changeTextArea}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
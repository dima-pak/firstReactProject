import React from "react";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postsElements = props.posts;

    return (
        <div className={s.blockMyPosts}>
            <div className={s.start}>My posts</div>
            <div className={s.addComment}>
                <textarea value={props.newTextArea} onChange={props.changeTextArea}/>
                <button onClick={props.addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
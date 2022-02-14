import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.posts.posts.map((p) => (<Post message={p.message} like={p.like}/>))

    return (
        <div className={s.blockMyPosts}>
            <div className={s.start}>My posts</div>
            <div className={s.addComment}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
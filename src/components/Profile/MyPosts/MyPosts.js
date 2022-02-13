import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={s.blockMyPosts}>
            <div className={s.start}>My posts</div>
            <div className={s.addComment}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hi, how are you?' like={5}/>
                <Post message={`It's my first post`} like={19}/>
            </div>
        </div>
    )
}

export default MyPosts;
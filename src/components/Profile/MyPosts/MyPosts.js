import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div >
                <Post message='Hi, how are you?' like={5}/>
                <Post message={`It's my first post`} like={19}/>
            </div>
        </div>
    )
}

export default MyPosts;
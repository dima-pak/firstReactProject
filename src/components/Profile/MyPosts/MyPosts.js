import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.posts.posts.map((p) => (<Post message={p.message} like={p.like}/>))

    let textTextArea = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let changeTextArea = () => {
        props.dispatch({type: "CHANGE-TEXT-AREA", message: textTextArea.current.value});
    }

    return (
        <div className={s.blockMyPosts}>
            <div className={s.start}>My posts</div>
            <div className={s.addComment}>
                <textarea ref={textTextArea} value={props.newTextArea} onChange={changeTextArea}/>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
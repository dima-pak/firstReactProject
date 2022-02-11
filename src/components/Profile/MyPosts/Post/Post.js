import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (<div className={s.item}>
        <img
            src='https://sun9-36.userapi.com/impg/o0lTeTB2cSRl2IGjgUHITfwOzDfB3hVoyKskBg/MI-9OrxcFKA.jpg?size=762x1080&quality=96&sign=5bb6aba7105d96d1f637d59130928b87&type=album'/>
        {props.message}
        <div>
            <span>Like </span>{props.like}
        </div>
    </div>)
}

export default Post;
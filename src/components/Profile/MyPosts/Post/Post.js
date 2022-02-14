import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (<div className={s.item}>
        <img
            src='https://cdn.discordapp.com/attachments/651512554496983057/942788573634134066/LBg_hEtfd3c.png'/>
        <div className={s.message}>
            {props.message}
            <div className={s.like}>
                <span>Like: </span>{props.like}
            </div>
        </div>
    </div>)
}

export default Post;
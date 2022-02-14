import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={props.senderActive? s.senderNoActive : s.senderActive}>
            <img className={s.img} src="https://cdn.discordapp.com/attachments/651512554496983057/942787149282041956/DDpdCQQy534.png"/>
            <div className={s.window}>
                {props.message}
            </div>
        </div>
    )
}

export default Message
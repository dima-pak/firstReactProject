import React from "react"
import s from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <User key={u.id} id={u.id} followed={u.followed} follow={props.follow} unfollow={props.unfollow}
                                           fullName={u.fullName} status={u.status} location={u.location}/>)

            }
        </div>
    )
}

export default Users;
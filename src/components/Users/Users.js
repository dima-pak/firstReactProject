import React from "react"
import s from "./Users.module.css";
import User from "./User/User";
import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://react-first-project-6571f-default-rtdb.firebaseio.com/users.json').then( response => {
            props.setUsers(response.data);
            console.log(response);
        })
    }

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
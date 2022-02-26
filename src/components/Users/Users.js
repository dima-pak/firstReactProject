import React from "react"
import s from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.numberingPage}>

                {pages.map(p => <span className={props.currentPage === p && s.targetPage} onClick={(event) => {props.changeCurrentPage(p)}}> {p} </span>)}

            </div>
            {
                props.users.map(u => <User key={u.id} id={u.id} followed={u.followed}
                                           follow={props.follow} unfollow={props.unfollow}
                                           fullName={u.fullName} status={u.status} location={u.location}/>)
            }
            <button onClick={props.getUsers}>Add users</button>
        </div>
    )
}

export default Users;
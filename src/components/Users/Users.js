import React from "react"
import s from "./Users.module.css";
import User from "./User/User";
import {Redirect} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // return <Redirect to={"/music"}/>;

    return (
        <div className={s.mainBlock}>
            <div className={s.numberingPage}>

                {pages.map(p => <span className={props.currentPage === p && s.targetPage} onClick={(event) => {props.changeCurrentPage(p)}}> {p} </span>)}

            </div>
            {
                props.users.map(u => <User key={u.id} id={u.id} followed={u.followed}
                                           follow={props.follow} unFollow={props.unFollow}
                                           fullName={u.fullName} status={u.status} location={u.location}/>)
            }
        </div>
    )
}

export default Users;
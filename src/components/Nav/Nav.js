import React from "react";
import {Link} from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
    return(
        <nav>
            <div className={s.item}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={s.item}>
                <Link to="/dialogs">Message</Link>
            </div>
            <div className={s.item}>
                <Link to="/news">News</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/music">Music</Link>
            </div>
            <div className={s.item}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    )
}

export default Nav;

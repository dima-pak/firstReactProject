import React from "react";
import s from "./Reloader.module.css";
import preloader from "../../../image/bars.svg"

const Reloader = () => {
    return (
        <div className={s.mainBlock}>
            <img src={preloader}/>
        </div>
    )
}

export default Reloader;
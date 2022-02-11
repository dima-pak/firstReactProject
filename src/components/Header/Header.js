import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (<header>
            <img className={s.img}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png'
                width={200}/>
        </header>)
}

export default Header;
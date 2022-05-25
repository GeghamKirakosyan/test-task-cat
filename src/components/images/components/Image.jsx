import React from "react";
import style from "../style/Images.module.css"


export const Image = ({url}) => {
    return <div className={style.div}>
        <img src={url} className={style.img} />
    </div>
}
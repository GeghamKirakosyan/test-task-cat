import React from "react";
import style from "../style/categories.module.css"

export const Categori = ({name,id, addCategoriImages}) => {
    return <div onClick={() => addCategoriImages(id)} className={style.child}>
        {name}
    </div>
}
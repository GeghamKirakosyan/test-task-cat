import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imagesReq } from "../../apiRequest/imagesReq";
import { Image } from "./components/Image"
import style from "./style/Images.module.css"
import {Loader} from "../loader/Loader"

export const Images = () => {
    let dispatch = useDispatch()
    let [pageIndex, setPageIndex] = useState(1)
    let {categories,images} = useSelector(state => state)
    const addImages = () => setPageIndex(prev => prev + 1)
    useEffect(() => {
        dispatch(imagesReq(categories.categori_id,pageIndex))
    },[categories.categori_id,pageIndex])
    return <div>
        { images.loader && <Loader/> }
        {images.url.length?
        <div className={style.container}>
            {images.url.map(url => <Image key={url.id} {...url} />)}
        </div>
        :
        <div>
            not images
        </div>
            }
            <div onClick={addImages} className={style.button}>click my for more image</div>
    </div>
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesReq } from "../../apiRequest/categoriesReq";
import { categoriesIdAC } from "../../redux/reducers/categoriesReducer";
import {  remuveImagesStateAC } from "../../redux/reducers/imagesReducer";
import { Categori } from "./components/Categori";
import style from "./style/categories.module.css"

export const Categories = () => {
    const dispatch = useDispatch()
    const {categories,categori_id} = useSelector(state => state.categories)
    const addCategoriImages = (newCategoriId) => {
        if(categori_id !== newCategoriId){
            dispatch(remuveImagesStateAC())
            dispatch(categoriesIdAC(newCategoriId))
        }
    }
    useEffect(() => {
        dispatch(categoriesReq())
    },[])
    return <header >
        {categories.length?
        <div className={style.container}>
            {categories.map(categori => <Categori addCategoriImages={addCategoriImages} key={categori.id} {...categori} />)}
        </div>
        :
        <div>
            There are no categories
        </div>    
    }
    </header>
}
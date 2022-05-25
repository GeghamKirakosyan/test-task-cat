import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "../../components/Categories/Categories";
import { Images } from "../../components/images/Images";

export const Cat = () => {
    let {loader} = useSelector(state => state.images)
    return <div>
        <Categories />
        <Images/>
    </div>
}
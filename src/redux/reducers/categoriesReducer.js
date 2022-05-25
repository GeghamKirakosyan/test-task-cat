import { ADD_CATEGORIES, ADD_CATEGORIES_ID } from "./GLOBAL_VAR/actionType"
import { DEFAULT_CATEGORIES_STATE } from "./GLOBAL_VAR/defaultStates"


export const categoriesReducer = (state = DEFAULT_CATEGORIES_STATE,action) => {
    switch(action.type){
        case ADD_CATEGORIES: 
            return {...state,categories:[...action.payload]}
        case ADD_CATEGORIES_ID: 
            return {...state,categori_id:action.id}
        default:
            return state
    }

}


export const categoriesAC = payload => ({type:ADD_CATEGORIES,payload}) 
export const categoriesIdAC = id => ({type:ADD_CATEGORIES_ID,id}) 


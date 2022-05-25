import { ADD_ALL_CAT_IMAGES, CHANGE_LOADER, REMOVE_IMAGES_STATE } from "./GLOBAL_VAR/actionType"
import { DEFAULT_IMAGES_STATE } from "./GLOBAL_VAR/defaultStates"


export const imagesReducer = (state = DEFAULT_IMAGES_STATE,action) => {
    switch(action.type){
        case ADD_ALL_CAT_IMAGES: 
            return {...state,url:[...state.url,...action.payload]}
        case CHANGE_LOADER: 
            return {...state,loader:action.payload}
        case REMOVE_IMAGES_STATE: 
            return {...state,url:[]}
        default:
            return state
    }
}


export const imagesAC = payload => ({type:ADD_ALL_CAT_IMAGES,payload}) 
export const loaderAC = payload => ({type:CHANGE_LOADER,payload}) 
export const remuveImagesStateAC = () => ({type:REMOVE_IMAGES_STATE}) 



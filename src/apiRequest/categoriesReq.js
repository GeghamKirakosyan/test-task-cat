import { categoriesAC } from "../redux/reducers/categoriesReducer"

export const categoriesReq = () =>{
    return next => {
        try {
            fetch('https://api.thecatapi.com/v1/categories')
            .then(response => response.json())
            .then(json => next(categoriesAC(json)))
        } catch (error) {
            console.log(error)
        }
        
    }
} 
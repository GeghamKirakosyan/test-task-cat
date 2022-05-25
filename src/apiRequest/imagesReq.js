import { imagesAC, loaderAC } from "../redux/reducers/imagesReducer"

export const imagesReq = (categoriId,pages) =>{
    return dispatcht => {
            try {
            dispatcht(loaderAC(true))
            fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${pages}&category_ids=${categoriId}`)
            .then(response => response.json())
            .then(json => dispatcht(imagesAC(json)))
            .then(()=>dispatcht(loaderAC(false)))
            
            } catch (error) {
            console.log(error)
        }
        
    }
} 
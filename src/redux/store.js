import {applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import {imagesReducer} from "./reducers/imagesReducer"

const rootReducers = combineReducers({
    categories:categoriesReducer,
    images:imagesReducer
})

export let store = createStore(rootReducers,applyMiddleware(thunk))
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer";
import { categoriesReducer } from './categoriesReducer'
import { productReducer } from "./productReducer";
import { productsReducer } from './productsListReducer'


            
const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsList: productsReducer,
    product: productReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
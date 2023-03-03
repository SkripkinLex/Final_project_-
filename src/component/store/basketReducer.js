import { act } from "react-dom/test-utils"

const defaultState = {
    basket: []
}


const INCR_PRODUKT = 'INCR_PRODUKT' 
const DECR_PRODUKT = 'DECR_PRODUKT'
const ADD_PRODUCT = 'ADD_PRODUCT'


export const basketReducer = (state = defaultState, stock) => {
    switch (stock.type){
        case ADD_PRODUCT:
            return {...state, basket: [...state.basket, {...stock.payload, count: 1}]}  
        case INCR_PRODUKT:
            return {...state, basket: state.basket.map(elem => {
                if (elem.id === stock.payload){
                    elem.count++
                }
                return elem
            })}   
            case DECR_PRODUKT:
                return {...state, basket: state.basket.map(elem => {
                    if (elem.id === stock.payload){
                        elem.count-- 
                }
                return elem         
            })}                           
        default:
            return state    
    }
}

export const incrProductAction = (payload) => ({type: INCR_PRODUKT, payload})
export const decrProduktAction = (payload) => ({type: DECR_PRODUKT, payload})
export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const resetAction = () => ({type: 'RESET'})

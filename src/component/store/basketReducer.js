import { type } from "@testing-library/user-event/dist/type"

const defaultState = {
    basket: JSON.parse(localStorage.getItem('basketItems')) ?? []
}

// const defaultState = {
//     basket: [
//         {id: 1, title: 'Test1', price: 500},
//         {id: 2, title: 'Test2', price: 500},
//         {id: 3, title: 'Test3', price: 500},
//         {id: 4, title: 'Test4', price: 500},
//     ]
// }


const INCR_PRODUKT = 'INCR_PRODUKT' 
const DECR_PRODUKT = 'DECR_PRODUKT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REM_PRODUCT = 'REM_PRODUCT'
const CLEAR_BASKET = 'CLEAR_BASKET'



export const basketReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            let cart_item = state.basket.find(elem => elem.id === action.payload.id)
            if (cart_item){
                return {...state, basket: state.basket.map(elem => {
                    if (elem.id === cart_item.id){
                        elem.count++
                    }
                    return elem
                })} 
            }
            return {...state, basket: [...state.basket, {...action.payload, count: 1}]}  
        case INCR_PRODUKT:
            return {...state, basket: state.basket.map(elem => {
                if (elem.id === action.payload){
                    elem.count++
                }
                return elem
            })}   
            case DECR_PRODUKT:
                return {...state, basket: state.basket.map(elem => {
                    if (elem.id === action.payload && elem.count != 1 ){
                        elem.count-- 
                }
                return elem         
            })}        
            case REM_PRODUCT:
                return {...state, basket: state.basket.filter(elem => elem.id != action.payload)}
            case CLEAR_BASKET:
                return {...state, basket: []}
        default:
            return state    
    }
}

export const incrProductAction = (payload) => ({type: INCR_PRODUKT, payload})
export const decrProduktAction = (payload) => ({type: DECR_PRODUKT, payload})
export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const remProductAction = (payload) => ({type: REM_PRODUCT, payload})
export const clearBasketAction = () => ({type: CLEAR_BASKET})


const defaultState = {
    product: {}
}


const GET_PRODUCT = 'GET_PRODUCT'

export const productReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_PRODUCT:
            return {...state, product: action.payload}
        default: 
            return state  
    }
}


export const getProductAction = (payload) => ({type: GET_PRODUCT, payload})
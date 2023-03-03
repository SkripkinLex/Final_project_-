const defaultState = {
    product: {}
}

const GET_PRODUCT = 'GET_PRODUCT'

export const productReducer = (state = defaultState, stock) => {
    switch (stock.type){
        case GET_PRODUCT:
            return {...state, product: stock.payload}
        default:
            return state    
    }
}

export const getProductStock = (payload) => ({type: GET_PRODUCT, payload})
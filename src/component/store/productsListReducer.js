const defaultState = {
     productsList: []
}

const GET_PRODUCTS = 'GET_PRODUCTS'

export const productsReducer = (state = defaultState, stock) => {
    switch (stock.type){
        case GET_PRODUCTS:
            return {...state, productsList: stock.payload}
        default: 
            return state  
    }
}


export const getProductsStock = (payload) => ({type: GET_PRODUCTS, payload})
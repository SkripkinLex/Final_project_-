const defaultState = {
     productsList: []
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const SORT_PRODUCT = 'SORT_PRODUCT'
const FILTER_SALES_PRODUCT = 'FILTER_SALES_PRODUCT'
const FILTER_PRICE_PRODUCT = 'FILTER_PRICE_PRODUCT'

export const productsReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, productsList: action.payload.map(elem=> ({...elem, show_by_sale: true, show_by_price: true}))}
        case SORT_PRODUCT:
            if (action.payload === '1'){
                return {...state, productsList: state.productsList.slice().sort((crElem,nxElem) => nxElem.discont_price - crElem.discont_price)}
            } else if (action.payload === '2'){
                return {...state, productsList: state.productsList.slice().sort((crElem,nxElem) => crElem.discont_price - nxElem.discont_price)}
            } else if (action.payload === '0'){
                return {...state, productsList: state.productsList.slice().sort((crElem,nxElem) => crElem.id - nxElem.id)}
            } else {
                return state
            }
        case FILTER_SALES_PRODUCT:
                if (action.payload){
                    return {...state, productsList: state.productsList.map(elem => {
                        if (elem.discont_price - elem.price == 0){
                            elem.show_by_sale = false
                        }
                        return elem
                    })}
                } else {
                    return {...state, productsList: state.productsList.map(elem => ({...elem, show_by_sale: true}))}
                }
        case FILTER_PRICE_PRODUCT:
            let showProducts = state.productsList.map(elem => ({...elem, show_by_price: true}))
            return {...state, productsList: showProducts.map(elem => {
                if (!(elem.discont_price >= action.payload.min_price && elem.discont_price <= action.payload.max_price)){
                    elem.show_by_price = false
                }
                return elem
            })}
        default:
            return state    
    }
}

export const sortProductsAction = (payload) => ({type: SORT_PRODUCT, payload})
export const getProductsAction = (payload) => ({type: GET_PRODUCTS, payload})
export const filterSalesProductAction = (payload) => ({type: FILTER_SALES_PRODUCT, payload})

export const filterPriceProductAction = (payload) => {

    payload.max_price = (payload.max_price) ? +payload.max_price : Infinity
    payload.min_price = (payload.min_price) ? +payload.min_price : -Infinity

    return {
        type: FILTER_PRICE_PRODUCT,
        payload
    }
}






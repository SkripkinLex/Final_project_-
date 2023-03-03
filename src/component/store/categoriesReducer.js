const defaultState = {
    categories: []
}

const GET_CATEGORIES = 'GET_CATEGORIES'

export const categoriesReducer = (state = defaultState, stock) => {
    switch (stock.type){
        case GET_CATEGORIES:
            return {...state, categories: stock.payload}
        default:
            return state    
    }
}

export const getCategoriesAction = (payload) => ({type: GET_CATEGORIES, payload})





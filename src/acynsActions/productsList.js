import { baseUrl } from ".."
import { getProductStock } from "../component/store/productReducer"
import { getProductsStock } from "../component/store/productsListReducer"


export const fetchProductsList = (id) => {
    return function(dispatch){
        fetch(`${baseUrl}${(id != 'all') ? `/categories/${id}` : '/products/all' }`)
            .then(res => res.json())
            .then(data => dispatch(getProductsStock(data)))
    }
}

export const fetchProduct = (id) => {
    return function(dispatch){
        fetch(`${baseUrl}/products/${id}`)
            .then(res => res.json())
            .then(data => dispatch(getProductStock(data[0])))
    }
}
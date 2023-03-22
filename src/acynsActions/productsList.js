import { baseUrl } from ".."
import { getProductAction } from "../component/store/productReducer"
import { getProductsAction } from "../component/store/productsListReducer"



export const fetchProductsList = (id) => {

    return function(dispatch){
        fetch(`${baseUrl}${(id != 'all') ? `/categories/${id}` : '/products/all' }`)
            .then(res => res.json())
            .then(data =>{
                dispatch(getProductsAction(data))
            })
    }
}

export const fetchProduct = (id) => {
    return function(dispatch){
        fetch(`${baseUrl}/products/${id}`)
            .then(res => res.json())
            .then(data => dispatch(getProductAction(data[0])))
    }
}
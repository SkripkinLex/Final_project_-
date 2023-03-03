import { baseUrl } from ".."
import { getCategoriesAction } from "../component/store/categoriesReducer"

export const fetchCategories = () => {
    return function(dispatch){
        fetch(`${baseUrl}/categories/all`)
            .then(res => res.json())
            .then(data => dispatch(getCategoriesAction(data)))
    }
}
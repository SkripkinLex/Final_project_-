import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../../acynsActions/categories"
import CategoryItem from "../../Categoryitem"
import './CategoriesPage.css' 



function CategoriesPage(){
    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()
                                                           
    useEffect(() => {
      dispatch(fetchCategories())
    }, [])
  
    return(
        <div>
            <h1 className="title_categories">Categories</h1>
            <div className="wrapper_categories">

            {categories.map(elem => 
                <CategoryItem
                key = {elem.id} 
                id = {elem.id}
                title = {elem.title}
                image = {elem.image}
                />
            )}
            </div>
        </div>
    )
}
export default CategoriesPage
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../../acynsActions/categories"



function CategoriesPage(){
    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()
                                                           
    useEffect(() => {
      dispatch(fetchCategories())
    },[])
  
    return(
        <div>
            <h1>Categories</h1>
            <div>
                {categories.map(elem => 
                <div>
                    {elem.title}
                </div>
                )}
            </div>
        </div>
    )
}
export default CategoriesPage
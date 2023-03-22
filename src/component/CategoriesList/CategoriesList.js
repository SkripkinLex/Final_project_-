import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchCategories } from "../../acynsActions/categories"
import Button from "../../UI/Button/Button"
import CategoryItem from "../Categoryitem"


function CategoriesList() {
  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch()
                                                         
  useEffect(() => {
    dispatch(fetchCategories())
  },[])

  return (
    <div>
      <div className='categories_text'>
        <h2 className='categories_title'>Categories</h2>
        </div>
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

  
  export default CategoriesList
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../../acynsActions/categories';
import Button from '../../../UI/Button/Button';
import CategoryItem from '../../Categoryitem';
import './Categories.css'


const Categories = forwardRef((props, ref) => {
  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch()
                                                         
  useEffect(() => {
    dispatch(fetchCategories())
  },[])

    return (
      <div ref={ref}>
        <div className='categories_text_Wrapper'>
          <h2 className='categories_title'>Categories</h2>
            <Link to={'/categories'}>
              <Button  color='gray' title='All categories'/>
            </Link>
        </div>
        <div className="wrapper_categories">

          {categories.slice(0,4).map(elem => 
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
})
  
  export default Categories
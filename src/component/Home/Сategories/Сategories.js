import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../..';
import { fetchCategories } from '../../../acynsActions/categories';
import Button from '../../../UI/Button/Button';
import './Categories.css'

function Categories() {
  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch()
                                                         
  useEffect(() => {
    dispatch(fetchCategories())
  },[])

    return (
      <div>
        <div className='categories_text'>
          <h2 className='categories_title'>Categories</h2>
            <Link to={'/categorieslist'}>
              <Button  color='gray' title='all categories' font='m'/>
            </Link>
          </div>
        <div className="wrapper_categories">

          {categories.slice(0,4).map(elem => 
            <div key={elem.id}>
              <div className='images' style={{backgroundImage: `url(${baseUrl+elem.image})`}}>
              </div>
              <Link className='link_css' to={`/categories/${elem.id}`}>
                <p className='categories_text'>{elem.title}</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  
}

  
  export default Categories
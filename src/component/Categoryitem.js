import { Link } from "react-router-dom"
import { baseUrl } from ".."



function CategoryItem(props){
    const {id, title, image} = props
    return(
        <div>
              <Link className='link_css' to={`/categories/${id}`}>
              <div className='images' style={{backgroundImage: `url(${baseUrl+image})`}}>
              </div>
              
                <p className='categories_text'>{title}</p>
              </Link>
            </div>
    )
}

export default CategoryItem

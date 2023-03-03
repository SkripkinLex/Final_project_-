import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { baseUrl } from "../.."
import { fetchCategories } from "../../acynsActions/categories"
import { fetchProductsList } from "../../acynsActions/productsList"
import './ProductsList.css'



function ProductsList(){
    const {id} = useParams()
    const productsList = useSelector(store => store.productsList.productsList)
    const Category = useSelector(store => store.categories.categories).find(elem => elem.id == id)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsList(id))
        dispatch(fetchCategories())
        
    },[])
    
    console.log(productsList)
    return (
        <div>
            <h3>{(id === 'all') ? 'All products' : Category?.title}</h3>
            <div>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className="wrapper_products">
                {productsList.map(elem =>
                    <Link className="link_css" to={`/productsList/${elem.id}`}>
                        <div className="product_wrapper" key={elem.id}>
                            <div className='images' style={{backgroundImage: `url(${baseUrl+elem.image})`}}></div>
                            <div className="product_prices_wrapper">
                                <p className="product_title_descr">{elem.discont_price}</p>
                                {elem.discont_price - elem.price !== 0 &&
                                    <>
                                        <p className="product_title_descr price_line">{elem.price}</p>
                                        <p className="product_title_descr discount">{Math.round(((elem.discont_price / elem.price) * 100) - 100)} %</p>
                                    </>
                                }
                                </div>
                            <p className="product_title_descr">{elem.title}</p>

                        </div> 
                    </Link>     
                )}
            </div>
        </div>
    )
}


export default ProductsList
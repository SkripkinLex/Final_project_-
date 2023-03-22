import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { baseUrl } from ".."
import './Productitem.css'
import { addProductAction } from "./store/basketReducer"


function ProductItem(props){

    const dispatch = useDispatch()

    const {id, title, price, discont_price, image} = props.product
    const product = props.product

    return(
        
        <div className="product_wrapper" key={id}>
            <Link className="link_text_decoration" to={`/product/${id}`}>
            <div className='images' style={{backgroundImage: `url(${baseUrl+image})`}}>
                <button onClick={(e) => {
                    e.preventDefault()
                    dispatch(addProductAction(product))
                }} className='btn_add_relative'>
                    Add to cart
                </button>
            </div>
            
            
            <div className="product_prices_wrapper">
                <p className="product_title_descr_price">{discont_price}$</p>
                {discont_price - price !== 0 &&
                    <>
                        <p className="product_title_descr_1 price_line">{price}$</p>
                        <p className="product_title_descr_2 discount">{Math.round(((discont_price / price) * 100) - 100)} %</p>
                    </>
                }
            </div>
            <p className="product_title_descr">{title}</p>
            </Link>
        </div>
            
    )
}

export default ProductItem
   
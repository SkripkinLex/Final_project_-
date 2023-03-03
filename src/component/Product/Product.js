import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../..'
import { fetchProduct } from '../../acynsActions/productsList'
import Button from '../../UI/Button/Button'
import { addProductAction } from '../store/basketReducer'
import './Product.css'


function Product(){
    const {id}=useParams()
    const product=useSelector(store => store.product.product)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch (fetchProduct(id))
    }, [])



    return(
        <div className='product_div'>
            <h1 className='title_product'>{product.title}</h1>
            <div className='product_container'>
                <img className='product_img' src={baseUrl+product.image}/>
                <div>
                    <div className='price_container'>
                        <p className='discont_price'>{product.discont_price}$</p>
                        <p className='price_product'>{product.price}$</p>
                    </div>
                    <Button  
                        onClick={() => dispatch(addProductAction(product))}
                        title ={'Add to cart'} 
                        color='cart'/> 
                        <p className='description_title'>Description</p>  
                    <p className='price_description'>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product
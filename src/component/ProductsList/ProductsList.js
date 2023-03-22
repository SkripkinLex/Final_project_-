import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCategories } from "../../acynsActions/categories"
import { fetchProductsList } from "../../acynsActions/productsList"
import FilterProducts from "../FilterProducts"
import ProductItem from "../Productitem"
import './ProductsList.css'



function ProductsList(){
    const {id} = useParams()
    const productsList = useSelector(store => store.productsList.productsList).filter(elem => elem.show_by_sale && elem.show_by_price)
    const category = useSelector(store => store.categories.categories).find(elem => elem.id === id)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsList(id))
        dispatch(fetchCategories())
        
    },[dispatch, id])



     return (
        <div>
            <h3 className="title_productList">{(id === 'all') ? 'Tools and equipment' : category?.title}</h3>
            <FilterProducts/>
            <div className="wrapper_products">
                {productsList.map(elem => <ProductItem key = {elem.id}product = {elem}/>     
                )}
            </div>
        </div>
    )
}


export default ProductsList
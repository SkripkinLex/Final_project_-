import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../../../acynsActions/productsList';
import ProductItem from '../../Productitem';
import './Stock.css';


const Stock = forwardRef((props, ref) =>{
  const productsSaleList = useSelector(store => store.productsList.productsList).filter(elem => elem.price - elem.discont_price !== 0)
  const productsSortList = productsSaleList.sort(() => Math.random() - 0.5).slice(0,3)
  const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch (fetchProductsList('all'))
    }, [])
  
   

    return (
      <div ref={ref} className="wrapper_Stock">
        <p className='text'>Sale</p>
        <div className='stock_container'>
           {productsSortList.map(elem => 
              <ProductItem key = {elem.id}product = {elem}/>
            )}
        </div>
      </div>
    );
  })

  
  export default Stock
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../..';
import { fetchProductsList } from '../../../acynsActions/productsList';
import './Stock.css';


function Stock() {
  const productsSaleList = useSelector(store => store.productsList.productsList).filter(elem => elem.price - elem.discont_price !== 0)
  const productsSortList = productsSaleList.sort(() => Math.random() - 0.5).slice(0,3)
  const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch (fetchProductsList('all'))
    }, [])
  
    return (
      <div className="wrapper_Stock">
        <p className='text'>Stock</p>
        <div className='stock_container'>
           {productsSortList.map(elem => 
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
    );
  }
  
  export default Stock
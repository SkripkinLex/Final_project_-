import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import './Header.css'
import {ReactComponent as SvgBasket} from '../media/Basket.svg'

function Header(props) {
  const {scrollCategoriesHandle, scrollCouponHandle, scrollStockHandle, scrollContactHandle} = props
    return (
      <div className="header">
        <div className="header_catalog">
          <Link to ='/'>
            <div className="header_logo">
            </div>
          </Link>
          <Link to={`/categories/all`}>
            <Button title ={'Catalog'} color='green'/>
          </Link>
        </div>
        <div className="header_wrapper">
            <p onClick={scrollCategoriesHandle} className='header_text' href="/categories">Categories</p>
            <p onClick={scrollCouponHandle} className='header_text' href="/coupon">Coupon</p>
            <p onClick={scrollStockHandle} className='header_text' href="/stock">Sale</p>
            <p onClick={scrollContactHandle} className='header_text' href="/contacts">Contacts</p>
            <Link to ='/basket'>
              <div className='svg_basket'>
              <SvgBasket/>
              </div>
            </Link>
        </div>
      </div>
    );
  }
  
  export default Header
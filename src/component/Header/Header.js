import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import './Header.css'

function Header() {
    return (
      <div className="header">
        <div className="header_catalog">
          <Link to ='/'>
            <div className="header_logo">
            </div>
          </Link>
          <Button title ={'Catalog'} color='green'/>
        </div>
        <div className="header_wrapper">
            <Button className='header_text' title = {'Categories'}><a  href="/categories">Categories</a></Button>
            <a className='header_text' href="/coupon">Coupon</a>
            <a className='header_text' href="/stock">Stock</a>
            <a className='header_text' href="/contacts">Contacts</a>
            <Link to ='/basket'>Basket</Link>
        </div>
      </div>
    );
  }
  
  export default Header
import { useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Button/input/input';

import './Basket.css'

function Basket() {

    const basketProducts = useSelector(store => store.basket.basket)
    return (
      <div className="wrapper_basket">
        <div>
          <h4 className='text'>Basket</h4>
          <div className='home_container'>
          <p className='home' >Home  /  Cart</p>
          <p className='back'>Back to shop </p>
          </div>
            {basketProducts.map(elem => <div>{elem.title}</div>)}
            
        </div>
        <div className='order_container'>
            <p className='order_details'>Order details</p>
            <p className='sum'>Sum</p>
            <Input color='Get_discount'/>
            <Button title ={'Add to cart'} color='Add_to_cart'/>
        </div>
    </div>
    );
  }
  
  export default Basket
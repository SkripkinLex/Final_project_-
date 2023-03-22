import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Button/input/input';
import Cartitem from '../Cartitem/Cartitem';
import { clearBasketAction } from '../store/basketReducer';



import './Basket.css'

function Basket() {

    const basketProducts = useSelector(store => store.basket.basket)
    const dispatch = useDispatch()

    useEffect(() => {
      localStorage.setItem('basketItems', JSON.stringify(basketProducts))
    }, [basketProducts])

    let sum = basketProducts.reduce((acum, elem) => acum + elem.discont_price * elem.count, 0)

    console.log(sum)

    return (
      <div className="wrapper_basket">
        <div className='basket_container'>
          <h4 className='text'>Shopping cart</h4>
          <div className='home_container'>
          <p className='home' >Home  /  Cart</p>
          <p className='back'>Back to the store</p>
          </div>
            <div className='cart_items'>
              {basketProducts.map(elem =>  
                <Cartitem 
                  id = {elem.id}
                  title = {elem.title}
                  url = {elem.image}
                  count = {elem.count}
                  discont_price = {elem.discont_price}
                  price = {elem.price}
                />)}
            </div>
        </div>
        <div className='order_container'>
            <p className='order_details'>Order details</p>
            <div className='sum_container'>
              <p className='sum'>Total</p>
              <p className='total'>{sum}$</p>
            </div>
            <Input className='Phone_number' color='Get_discount' placeholder={'Phone number'}/>
            <Button onClick={() => dispatch(clearBasketAction())} title ={'Order'} color='Add_to_cart'/>
        </div>
    </div>
    );
  }
  
  export default Basket
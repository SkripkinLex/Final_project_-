import './Coupon.css'
import gnom_png from '../../media/gnom.png'
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Button/input/input';

function Coupon() {
    return (
      <div className="wrapper_coupon">
        <div className='gnom'>
          <img alt='gnom_png' src={gnom_png}/>
        </div>
        <div className='discont_block'>
          <h1 className='discount_coupon'>5% off</h1>
          <h3 className='order'>on the first order</h3>
          <Input className='Phone_number_coupon_input' placeholder={'+49'}/>
          <Button title ={'Get a discount'} color='Get_a_discount'/>
        </div>
        

      </div>
    );
  }
  
  export default Coupon
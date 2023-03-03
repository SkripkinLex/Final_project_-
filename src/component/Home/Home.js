import Coupon from './Coupon/Coupon';
import Categories from './Сategories/Сategories';
import './Home.css'
import Button from '../../UI/Button/Button';
import Stock from './Stock/Stock';

function Home() {
    return (
      <div>
        <div className="wrapper_home">
          <div className='home_text'>
            <h1 className='text_1'>Sale</h1>
            <h2 className='text_2'>New season</h2>
            <Button title ={'All promotions'} color='promotions'/>
            <Button title ={'More'} color='white'/>
          </div>
        <div className='home_Foto'>
        </div>
      </div>
        <Categories/>
        <Coupon/>
        <Stock/>
      </div>

    );
  }
  
  export default Home
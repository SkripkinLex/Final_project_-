import Coupon from './Coupon/Coupon';
import Categories from './Сategories/Сategories';
import './Home.css'
import Button from '../../UI/Button/Button';
import Stock from './Stock/Stock';




export function Home(props) {

  const {CategoriesRef,CouponRef,SalessRef} = props

  
  return (
    <div>
      <div className="wrapper_home">
        <div className='home_text'>
          <h1 className='text_1'>Sale</h1>
          <h2 className='text_2'>New season</h2>
          <Button title ={'Sale'} color='promotions'/>
          <Button title ={'Learn more'} color='white'/>
        </div>
      <div className='home_Foto'>
      </div>
    </div>
      <Categories ref={CategoriesRef}/>
      <Coupon ref={CouponRef}/>
      <Stock ref={SalessRef}/>
      {/* <Contact ref={ContactRef}/> */}
    </div>

  );
  }
  
  export default Home
import './App.css'
import Header from "../Header/Header";
import Home from '../Home/Home';
import Action from '../Main/Actions/Actions';
import Coupon from '../Main/Coupon/Coupon';
import Contacts from '../Main/Contacts/Contacts';
import Categories from '../Main/Сategories/Сategories';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Categories/>
      <Coupon/>
      <Action/>
      <Contacts/>
    </div>
  );
}

export default App;

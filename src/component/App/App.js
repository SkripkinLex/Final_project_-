import './App.css'
import Header from "../Header/Header";
import Home from '../Home/Home';
import Contacts from '../Home/Contacts/Contacts';
import {Routes, Route} from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';
import Product from '../Product/Product';
import Basket from '../Basket/Basket';
import CategoriesList from '../CategoriesList/CategoriesList';
import '@fontsource/montserrat'
import CategoriesPage from '../Pages/CategoriesPage/CategoriesPage';
import { useRef } from 'react';


function App() {

  const CategoriesRef = useRef()
  const CouponRef = useRef()
  const SalessRef = useRef()
  const ContactRef = useRef()

  const scrollCouponHandle = () => {
    CategoriesRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollCategoriesHandle = () => {
    CategoriesRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollStockHandle = () => {
    SalessRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollContactHandle = () => {
    ContactRef.current.scrollIntoView({behavior: 'smooth'})
  }

  
  return (
    <div>
      <Header 
        scrollCategoriesHandle={scrollCategoriesHandle}
        scrollCouponHandle={scrollCouponHandle}
        scrollStockHandle={scrollStockHandle}
        scrollContactHandle={scrollContactHandle}
        />
        <Routes>
          <Route path="/" element={<Home
                                      CategoriesRef={CategoriesRef}
                                      CouponRef={CouponRef}
                                      SalessRef={SalessRef}
                                      />}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path='/categories/:id' element={<ProductsList/>}/>
          <Route path='/categories' element={<CategoriesList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/basket' element={<Basket/>}/>
        </Routes>
      <Contacts ref={ContactRef}/>
    </div>
  );
}

export default App;




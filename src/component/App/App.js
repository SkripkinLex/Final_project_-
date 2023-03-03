import './App.css'
import Header from "../Header/Header";
import Home from '../Home/Home';
import Contacts from '../Home/Contacts/Contacts';
import {Routes, Route} from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';
import Product from '../Product/Product';
import Basket from '../Basket/Basket';
import '@fontsource/montserrat'
import CategoriesPage from '../Pages/CategoriesPage/CategoriesPage';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path='/categories/:id' element={<ProductsList/>}/>
          <Route path='/productsList/:id' element={<Product/>}/>
          {/* <Route path='/categories/all' element={<CategoriesList/>}/> */}
          <Route path='/basket' element={<Basket/>}/>
          
        </Routes>
      <Contacts/>
    </div>
  );
}

export default App;


//Import {BrouwserRouter} from ‘react-router-dom’

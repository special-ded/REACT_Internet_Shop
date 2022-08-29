import React from 'react';
import Header from './Components/Header/Header';
import './index.css';
import Main from './Pages/Main/Main';
import ProductCard from '../src/Components/ProductCard/ProductCard';
import ExchangeRates from './Components/ExchangeRates'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart';
import ProductPage from './Components/ProductPage/ProductPage';
import SmallCart from './Components/SmallCart/SmallCart';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path='/' exact element={[<Header />, <Main />]} />
          <Route path='/cart' element={[<Header />, <Cart />]} />
          <Route path='/productPage:id' element={[<Header />, <ProductPage />]} />
        </Routes>



      </div>
    </BrowserRouter>

  );
}

export default App;

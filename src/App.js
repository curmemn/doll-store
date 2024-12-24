import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

import './styles/reset/reset.css';
import './styles/global.css';

function App() {
  const [addToCart, setAddToCart] = useState(0);
  const addCart = () => {
    setAddToCart(addToCart + 1)
  }
  return (
  <BrowserRouter>
  <Header addToCart={addToCart}/>
  <main>
    <Routes>
      <Route path='/' element={<HomePage addCart={addCart} />}></Route>
      <Route path='/product/:productId' element={<ProductDetailPage addCart={addCart} />}></Route>
    </Routes>
  </main>
  </BrowserRouter>
  );
}

export default App;

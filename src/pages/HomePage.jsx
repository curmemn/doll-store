import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/pages/homePage.css';

const HomePage = ({addCart}) => {
  return (
    <>
      <ProductList addCart={addCart}/>
    </>
  )
}

export default HomePage
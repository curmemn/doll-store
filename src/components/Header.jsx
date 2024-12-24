import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';

const Header = ({addToCart}) => {
  return (
    <header>
      <div className='header-inner inner'>
        <Link to='/' className='logo'>DOLL STORE</Link>
        <span className='cart'>장바구니: {addToCart}</span>
      </div>
    </header>
  )
}

export default Header
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/productCard.css';

const ProductCard = ({product, addCart, index}) => {
  const {name, originalPrice, discountedPrice, discountRate, imageUrl} = product;
  return (
    <div className='product-card'>
      <div className="product-image">
        <img src={imageUrl} alt={name} />
        <span className='discount-rate'>{discountRate}% 할인</span>
      </div>
      <div className="product-desc">
        <h3 className='product-name'>{name}</h3>
        <div className="price-wrap">
        <span className='original-price'>{originalPrice.toLocaleString('ko-KR')}원</span>
        <span className='discounted-price'>{discountedPrice.toLocaleString('ko-KR')}원</span>
        </div>
        <button className='add-cart' onClick={addCart}>장바구니 추가</button>
        <Link to={`/product/${index}`} className='more-info'>자세히 보기</Link>
      </div>
    </div>
  )
}

export default ProductCard
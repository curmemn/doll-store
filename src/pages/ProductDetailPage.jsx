import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/pages/productDetailPage.css';

const ProductDetailPage = ({addCart}) => {
  const {productId} = useParams();
  const productIndex = parseInt(productId, 10);
  const product = products[productIndex];
  if(!product){
    return(
      <div className='product-detail'>
        <div className='product-detail-wrap inner'>
          <h1>상품이 존재하지 않습니다.</h1>
          <Link to='/'><button className='home-button'>뒤로 가기</button></Link>
        </div>
      </div>
    )
  }
  return (
    <div className='product-detail'>
      <div className='product-detail-wrap inner'>
        <h1>{product.name}</h1>
        <div className='product-detail-image'>
          <img src={`../${product.imageUrl}`} alt={product.name} />
        </div>
        <div className="product-detail-desc">
          <span className='product-detail-orginal-price'>정가: <i>{product.originalPrice.toLocaleString('ko-KR')}원</i></span>
          <span className='product-detail-discounted-price'>할인가: <i>{product.discountedPrice.toLocaleString('ko-KR')}원</i></span>
          <span className='product-detail-discount-rate'>할인율: {product.discountRate}%</span>
          <div className="button-wrap">
            <button className='add-cart' onClick={addCart}>장바구니 추가</button>
            <Link to='/'><button className='home-button'>뒤로 가기</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
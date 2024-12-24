import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import '../styles/components/productList.css';

const ProductList = ({addCart}) => {
  /* 더보기 버튼을 누르면 상품 3개씩 보여주기 */
  const [moreProduct, setMoreProduct] = useState(3);
  const handleMoreProduct = () => {
    setMoreProduct((prev) => prev + 3);
  };
  const loadMoreProduct = products.slice(0, moreProduct);
  const isMoreProduct = moreProduct < products.length;

  return (
    <>
      <div className="product-list-wrap">
      <div className='product-list inner'>
        {loadMoreProduct.map((product, index) => (
          <ProductCard key={index} product={product} index={index} addCart={addCart} />
        ))}
      </div>
      {isMoreProduct && (
        <button onClick={handleMoreProduct} className='more-button'>더보기</button>
      )}
    </div>
</>
  )
}

export default ProductList
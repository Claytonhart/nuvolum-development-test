import React, { useState } from 'react';
import { useProducts } from '../../helpers/useProducts';
import styled from 'styled-components/macro';
import { ProductCard } from './ProductCard';
import { ProductDetail } from './ProductDetail';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const productsQuery = useProducts();
  if (productsQuery.isLoading) return <div>spinner...</div>;

  const handleClick = (id) => {
    setActiveProduct(id);
  };

  return (
    <Wrapper>
      <ProductsList>
        {productsQuery.data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            activeId={activeProduct}
            handleClick={() => handleClick(product.id)}
          />
        ))}
      </ProductsList>
      {activeProduct && (
        <ProductDetail
          productInfo={productsQuery.data[activeProduct - 1]}
          setActiveProduct={setActiveProduct}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`;
const ProductsList = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 16px;
  max-width: 50%;
  @media (max-width: 800px) {
    max-width: unset;
    padding: 16px 0;
  }
`;

export default Products;

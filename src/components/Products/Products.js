import React, { useState } from 'react';
import { useProducts } from '../../helpers/useProducts';
import styled from 'styled-components/macro';
import { ProductCard } from './ProductCard';
import { ProductDetail } from './ProductDetail';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(1);
  const productsQuery = useProducts();
  if (productsQuery.isLoading) return <div>spinner...</div>;

  const handleClick = (id) => {
    console.log('yes things');
    setActiveProduct(id);
  };

  return (
    <Wrapper>
      <ProductsList>
        {productsQuery.data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleClick={() => handleClick(product.id)}
          />
        ))}
      </ProductsList>
      <ProductDetail productInfo={productsQuery.data[activeProduct - 1]} />
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
`;

export default Products;

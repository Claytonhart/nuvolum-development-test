import React from 'react';
import { ChevronRight } from 'react-feather';
import styled from 'styled-components/macro';

export const ProductCard = ({ product, handleClick }) => {
  const { title, price, description, image, rating } = product;

  return (
    <Wrapper>
      <Image src={image} alt='product item' onClick={handleClick} />
      {title}
      <ChevronRight size={48} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 32px 16px;
`;

const Image = styled.img`
  width: 50%;
  max-width: 200px;
  cursor: pointer;
`;

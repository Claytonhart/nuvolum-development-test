import React from 'react';
import styled from 'styled-components/macro';

export const ProductDetail = ({ productInfo }) => {
  const { price, description, rating, image } = productInfo;

  return (
    <Wrapper>
      <Image src={image} alt='product item' />
      <DetailWrapper>
        <h2>${price}</h2>
        <p>{description}</p>
        <div>{rating.rate}</div>
        <div>{rating.count}</div>
      </DetailWrapper>
      <Button>Add to Cart</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 16px;
  border: 1px solid hsla(0, 0%, 0%, 0.25);
`;

const Image = styled.img`
  width: 75%;
  margin: 0 auto;
  /* max-width: 200px; */
  cursor: pointer;
`;

const DetailWrapper = styled.div`
  padding: 16px;
`;

const Button = styled.button`
  background: hsl(200, 50%, 50%);
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 12px 42px;
  align-self: center;

  &:hover {
    background: hsl(200, 50%, 45%);
  }
`;

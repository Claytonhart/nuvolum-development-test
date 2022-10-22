import React from 'react';
import styled from 'styled-components/macro';

export const ProductDetail = ({ productInfo }) => {
  const { price, description, rating, image } = productInfo;

  return (
    <Wrapper>
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
  padding: 16px;
`;

const DetailWrapper = styled.div`
  padding: 16px;
`;

const Button = styled.button`
  justify-self: end;
`;

import React from 'react';
import styled from 'styled-components/macro';
import { X } from 'react-feather';

export const ProductDetail = ({ productInfo, setActiveProduct }) => {
  const { price, description, rating, image } = productInfo;

  return (
    <ModalWrapper>
      <Wrapper>
        <CloseModalButton onClick={() => setActiveProduct(null)}>
          <X size={64} />
        </CloseModalButton>
        <Image src={image} alt='product item' />
        <BottomWrapper>
          <DetailWrapper>
            <h2>${price}</h2>
            <p>{description}</p>
            <div>{rating.rate}</div>
            <div>{rating.count}</div>
          </DetailWrapper>
          <Button>Add to Cart</Button>
        </BottomWrapper>
      </Wrapper>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  flex: 1;
  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsl(0, 0%, 30%);
    display: flex;
    align-items: center;
  }
`;

const CloseModalButton = styled.button`
  display: none;
  @media (max-width: 800px) {
    display: block;
    color: hsl(200, 50%, 50%);
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;
    border: none;
    background: none;
    font-size: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 16px;
  border: 1px solid hsla(0, 0%, 0%, 0.25);
  position: relative;

  @media (max-width: 800px) {
    background: white;
    margin: 0 auto;
    min-height: 100%;
  }
`;

const Image = styled.img`
  max-width: 75%;
  margin: 0 auto;
  max-height: 500px;
  /* max-width: 200px; */
  cursor: pointer;

  @media (max-width: 800px) {
    padding-top: 32px;
  }
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

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

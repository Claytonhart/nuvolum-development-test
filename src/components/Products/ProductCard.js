import React from 'react';
import { ChevronRight } from 'react-feather';
import styled from 'styled-components/macro';

export const ProductCard = ({ product, handleClick }) => {
  const { title, price, description, image, rating } = product;

  return (
    <Wrapper>
      <Image src={image} alt='product item' onClick={handleClick} />
      <Desc onClick={handleClick}>{title}</Desc>
      <IconBg onClick={handleClick}>
        <ChevronRight
          style={{
            minWidth: '48px',
            transform: 'translateX(2px)',
            color: 'currentcolor',
          }}
          size={48}
        />
      </IconBg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 32px 16px;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
  max-width: 150px;
  cursor: pointer;
`;

const Desc = styled.div`
  padding: 16px;
  cursor: pointer;
`;

const IconBg = styled.div`
  color: hsl(200, 50%, 50%);
  border: 4px solid currentColor;
  border-radius: 50%;
  cursor: pointer;
`;

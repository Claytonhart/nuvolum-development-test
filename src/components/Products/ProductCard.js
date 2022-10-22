import React from 'react';
import { ChevronLeft } from 'react-feather';
import styled from 'styled-components/macro';

export const ProductCard = ({ product, activeId, handleClick }) => {
  const { title, price, description, image, rating, id } = product;

  const isActive = id === activeId;

  return (
    <Wrapper>
      <Image src={image} alt='product item' onClick={handleClick} />
      <Desc onClick={handleClick}>{title}</Desc>
      <IconBg onClick={handleClick} isActive={isActive}>
        <Icon size={48} isActive={isActive} />
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

const Icon = styled(ChevronLeft)`
  min-width: 48px;
  transform: translateX(2px);
  color: currentColor;
  transform: ${(props) => (props.isActive ? 'rotate(180deg)' : 'none')};
  transition: all 0.2s ease-in;
`;

const Desc = styled.div`
  padding: 16px;
  cursor: pointer;
`;

const IconBg = styled.div`
  color: ${(props) => (props.isActive ? '#fff' : ' hsl(200, 50%, 50%)')};
  background: ${(props) => (props.isActive ? ' hsl(200, 50%, 50%)' : '#fff')};
  transition: all 0.2s ease-in;
  border: 4px solid hsl(200, 50%, 50%);
  border-radius: 50%;
  cursor: pointer;
`;

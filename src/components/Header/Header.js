import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
  return (
    <Wrapper>
      <Heading>Modern Clothing</Heading>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        architecto neque illum eius error, totam mollitia reiciendis officiis
        quis magnam?
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0 auto;
  max-width: 1000px;
  padding: 32px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  color: hsl(200, 50%, 50%);
  font-weight: 200;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;

  @media (max-width: 800px) {
    font-size: 1rem;
    max-width: 88%;
    margin: 0 auto;
  }
`;

export default Header;

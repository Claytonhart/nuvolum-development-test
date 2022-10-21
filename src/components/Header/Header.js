import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
  return (
    <Wrapper>
      <Heading>Heading</Heading>
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
  margin-top: 36px;
  max-width: 50%;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
`;

export default Header;

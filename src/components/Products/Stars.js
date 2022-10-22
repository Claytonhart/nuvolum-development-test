import React from 'react';
import styled from 'styled-components/macro';
import { Star } from 'react-feather';

const Stars = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rating.rate)) {
      stars.push(<Star key={i} style={{ fill: 'hsl(48, 100%, 50%)' }} />);
    } else {
      stars.push(<Star key={i} />);
    }
  }

  return <StarContainer>{stars}</StarContainer>;
};

const StarContainer = styled.div`
  display: flex;
  color: hsl(48, 100%, 50%);
`;

export default Stars;

import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';

import { Icon } from '@types';

const Logo: Icon = ({ fill = 'white' }) => {
  return (
    <LogoContainer>
      <svg viewBox="0 0 490 490" height="35px">
        <path
          fill={fill}
          d="M23.968,122.5v245L245,490l221.032-122.5v-245L245,0L23.968,122.5z M331.299,292.828L245,340.656l-86.299-47.828v-95.657
      L245,149.343l86.299,47.828V292.828z"
        />
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;

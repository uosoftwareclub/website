import react from 'react';
import styled from '@emotion/styled';

import mediaqueries from "@styles/media";

const Mobile = styled.div`
  display: none;
  ${mediaqueries.phablet`
    display: block;
  `}
`

export default Mobile;
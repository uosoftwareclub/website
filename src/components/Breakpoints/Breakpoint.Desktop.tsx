import react from 'react';
import styled from '@emotion/styled';

import mediaqueries from "@styles/media";

const Desktop = styled.div`
  display: block;
  ${mediaqueries.phablet`
    display: none;
  `}
`

export default Desktop;
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import { IColorThemeProps } from "@types";

const Cell = styled.td<IColorThemeProps>`
  padding: 18px 30px;
  font-size: 16px;
  background: ${p => p.theme.colors.card};

  ${mediaqueries.desktop`
    padding: 14px 20px;
  `}

  ${mediaqueries.tablet`
    font-size: 14px;
  `}
`;

export default Cell;

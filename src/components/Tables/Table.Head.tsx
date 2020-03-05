import styled from "@emotion/styled";
import { IColorThemeProps } from "@types";

const Head = styled.thead<IColorThemeProps>`
  text-align: left;
  border-collapse: collapse;
  position: relative;
  line-height: 1.756;
  font-weight: 600;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.serif};
  transition: ${p => p.theme.colorModeTransition};
`;

export default Head;

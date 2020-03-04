import styled from "@emotion/styled";
import { IColorThemeProps } from "@types";

const Figcaption = styled.figcaption`
  color: ${(p: IColorThemeProps) => p.theme.colors.grey};
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding-top: 6px;
`;

export default Figcaption;
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Icons from '@icons';
import { IColorTheme } from "@types";

import { useThemeUI } from 'theme-ui';
export interface MenuButtonProps {
  opened?: boolean;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({opened, onClick}) => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  const renderButton = () => (
    <HamburgerContainer
      onClick={() => onClick()}
    >
      { button }
    </HamburgerContainer>
  );

  let button =  <Icons.Times fill={theme.colors.primary}/>;

  if (!opened) button = <Icons.Bars fill={theme.colors.primary}/>

  return (
    renderButton()
  );
}

export default MenuButton;

const HamburgerContainer = styled.div`
  cursor: pointer;
  user-select: none;
  height: 16px;
  width: 16px;
  margin-top: -8px;
`;

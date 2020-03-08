import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { IColorThemeProps } from "@types";

export interface MenuButtonProps {
  state?: string;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({state, onClick}) => {
  const renderButton = () => (
    <ToggleButton
      onClick={() => onClick()}
      className={state}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </ToggleButton>
  )
  return (
    renderButton()
  );
}

export default MenuButton;


const ToggleButton = styled.button<IColorThemeProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 12px;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  transform: translateZ(0);
  transition: -webkit-transform 0.1s ease-out;
  transition: transform 0.1s ease-out;
  transition: transform 0.1s ease-out, -webkit-transform 0.1s ease-out;
  
  &:active { transform: translateY(4px); }
  
  &:focus .line:after, &.hover .line:after { 
    background-color: ${p => p.theme.colors.primary};
  }

  .line {
    display: block;
    width: 30px;
    padding: 2.75px;
  }

  .line:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.grey};
    border-radius: 2px;
    transform: translateZ(0) rotate(0);
    transition: background-color 0.2s ease-out;
  }
  &.open {
    .line:nth-of-type(1) {
            animation: jump-1 0.9s forwards ease;
    }
    .line:nth-of-type(1):after {
            animation: line-1 0.9s forwards ease-in-out;
    }
    .line:nth-of-type(2) {
            animation: jump-2 0.9s forwards ease;
    }
    .line:nth-of-type(2):after {
            animation: line-2 0.9s forwards ease-in-out;
    }
  }
  .close {
    .line:nth-of-type(1) {
      animation: jump-1 0.9s reverse ease;
    }
    .line:nth-of-type(1):after {
      animation: line-1 0.9s reverse ease-in-out;
    }
    .line:nth-of-type(2) {
      animation: jump-2 0.9s reverse ease;
    }
    .line:nth-of-type(2):after {
      animation: line-2 0.9s reverse ease-in-out;
    }
  }

  &.open .line:nth-of-type(3), .close .line:nth-of-type(3) {
    animation: jump-3 0.9s forwards ease-out;
  }

  @-webkit-keyframes line-1 {
    10% {
      -webkit-transform: translateZ(0) rotate(0);
              transform: translateZ(0) rotate(0);
    }
    80% {
      -webkit-transform: translateZ(0) rotate(395deg);
              transform: translateZ(0) rotate(395deg);
    }
    90%, 100% {
      -webkit-transform: translateZ(0) rotate(405deg);
              transform: translateZ(0) rotate(405deg);
    }
  }

  @keyframes line-1 {
    10% {
      -webkit-transform: translateZ(0) rotate(0);
              transform: translateZ(0) rotate(0);
    }
    80% {
      -webkit-transform: translateZ(0) rotate(395deg);
              transform: translateZ(0) rotate(395deg);
    }
    90%, 100% {
      -webkit-transform: translateZ(0) rotate(405deg);
              transform: translateZ(0) rotate(405deg);
    }
  }
  @-webkit-keyframes line-2 {
    10% {
      -webkit-transform: translateZ(0) rotate(0);
              transform: translateZ(0) rotate(0);
    }
    20% {
      -webkit-transform: translateZ(0) rotate(10deg);
              transform: translateZ(0) rotate(10deg);
    }
    90%, 100% {
      -webkit-transform: translateZ(0) rotate(-405deg);
              transform: translateZ(0) rotate(-405deg);
    }
  }
  @keyframes line-2 {
    10% {
      -webkit-transform: translateZ(0) rotate(0);
              transform: translateZ(0) rotate(0);
    }
    20% {
      -webkit-transform: translateZ(0) rotate(10deg);
              transform: translateZ(0) rotate(10deg);
    }
    90%, 100% {
      -webkit-transform: translateZ(0) rotate(-405deg);
              transform: translateZ(0) rotate(-405deg);
    }
  }
  @-webkit-keyframes jump-1 {
    10% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-90px);
              transform: translateY(-90px);
    }
    90%, 100% {
      -webkit-transform: translateY(-2.75px);
              transform: translateY(-2.75px);
    }
  }
  @keyframes jump-1 {
    10% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-90px);
              transform: translateY(-90px);
    }
    90%, 100% {
      -webkit-transform: translateY(-2.75px);
              transform: translateY(-2.75px);
    }
  }
  @-webkit-keyframes jump-2 {
    10% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-75px);
              transform: translateY(-75px);
    }
    85%, 100% {
      -webkit-transform: translateY(-10.75px);
              transform: translateY(-10.75px);
    }
  }
  @keyframes jump-2 {
    10% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-75px);
              transform: translateY(-75px);
    }
    85%, 100% {
      -webkit-transform: translateY(-10.75px);
              transform: translateY(-10.75px);
    }
  }
  @-webkit-keyframes jump-3 {
    10% {
      -webkit-transform: translateY(-7.5px) rotate(15deg);
              transform: translateY(-7.5px) rotate(15deg);
    }
    30% {
      -webkit-transform: translateY(-30px) rotate(-10deg);
              transform: translateY(-30px) rotate(-10deg);
    }
    50% {
      -webkit-transform: translateY(2.75px) rotate(5deg);
              transform: translateY(2.75px) rotate(5deg);
    }
    80% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
  }
  @keyframes jump-3 {
    10% {
      -webkit-transform: translateY(-7.5px) rotate(15deg);
              transform: translateY(-7.5px) rotate(15deg);
    }
    30% {
      -webkit-transform: translateY(-30px) rotate(-10deg);
              transform: translateY(-30px) rotate(-10deg);
    }
    50% {
      -webkit-transform: translateY(2.75px) rotate(5deg);
              transform: translateY(2.75px) rotate(5deg);
    }
    80% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
  }
  @-webkit-keyframes glow {
    50% {
      box-shadow: rgba(131, 131, 131, 0.4) 0 0 2px 2px;
    }
  }
  @keyframes glow {
    50% {
      box-shadow: rgba(131, 131, 131, 0.4) 0 0 2px 2px;
    }
  }
`;
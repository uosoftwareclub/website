import React from 'react'
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useThemeUI } from 'theme-ui';
import { IColorTheme, IColorThemeProps } from '@types';

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  isSubmitting?: boolean
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, type, isSubmitting, isDisabled }) => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <StyledButton
      type={type || 'submit'}
      role="button"
      theme={theme}
      aria-label={text}
      disabled={isDisabled}>
        {isSubmitting ? <Spinner /> : text}
    </StyledButton>
  )
}

export default Button

const blink = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 20px;
  height: 20px;
`

const SpinnerDot = styled.span`
  position: relative;
  top: -13px;
  font-size: 5rem;
  line-height: 0;
  animation: ${blink} 1.4s infinite linear both;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const Spinner = () => (
  <SpinnerContainer>
    <SpinnerDot>.</SpinnerDot>
    <SpinnerDot>.</SpinnerDot>
    <SpinnerDot>.</SpinnerDot>
  </SpinnerContainer>
)

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 4.5rem;
  border: 1px solid ${(p: IColorThemeProps) => p.theme.colors.primary};
  border-radius: 4px;
  background: ${(p: IColorThemeProps) => p.theme.colors.primary};
  color: ${(p: IColorThemeProps) => p.theme.colors.background};
  font-weight: 500;
  font-size: 1.8rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  &: disabled {
    opacity: 0.5;
    cursor: unset;
  }
`
import React, { ReactNode } from 'react'
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import { Spinner } from '@components/Button/Button'
import media from '@styles/media'

interface ButtonArrowProps {
  as?: string | ReactNode
  to?: string
  onClick?: () => void
  text: string
  color?: string
  isSubmitting?: boolean
}

/**
 * <ButtonArrow /> is responsible for the various links around the website
 * that have the arrow animation on hover. This component is able to render
 * as a Link, Button, or whatever you want. Best practice is to use a Button
 * if it's an action item or a Link if you're linking to a new page.
 */
export default ({
  as,
  to,
  onClick,
  text,
  color = 'white',
  isSubmitting,
}: ButtonArrowProps) => (
  <ArrowButton
    as={as}
    to={to}
    onClick={onClick}
    color={color}
    role="button"
    data-a11y="false"
  >
    {isSubmitting ? (
      <Spinner />
    ) : (
      <ArrowAnimation color={color}>
        {text}
        <ArrowRightIcon aria-hidden="true" fill={color} />
      </ArrowAnimation>
    )}
  </ArrowButton>
)

const ArrowButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 600;
  color: ${p => p.color};
  background: transparent;
  height: 25px;
  max-width: 202px;

  ${media.tablet`
    flex-direction: column;
  `};

  svg {
    position: relative;
    margin-left: 10px;
    top: 1px;
    transition: transform 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  &:focus svg {
    transform: translateX(3rem);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -50%;
    width: 120%;
    height: 200%;
    border: 2px solid ${p => p.theme.colors.purple};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`

ArrowButton.defaultProps = {
  onClick: () => {},
  text: '',
}
const animateButtonLine = keyframes`
  0% {
      width: 0;
  }
  50% {
      width: 70%;
  }
  100% {
      width: 70%;
      left: 100%;
  }
`

const fadeInOut = keyframes`
  0% {
      opacity: 0;
      width: 0;
  }
  50% { opacity: 1; width: 40%}
  60% { opacity: 1; width: 70%}
  80% {
    opacity: 0;
    width: 50%;
    left: 100%;
  }
`

const ArrowAnimation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 0 3rem 0 0;
  height: 25px;
  font-size: 1.8rem;

  ${media.tablet`
    padding: 0rem 3rem 0 0rem;
  `};

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 13px;
    height: 1px;
    width: 0;
    background: ${p => p.color};
    opacity: 0;
    z-index: 100;
  }

  svg {
    transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover svg {
    transform: translateX(3rem);
  }

  &:hover span::after {
    animation: ${fadeInOut} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  &:hover::after {
    opacity: 1;
    animation: ${animateButtonLine} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;

    ${media.tablet`
      animation: none;
    `};
  }
`

export const ArrowRightIcon = ({ fill = 'white' }) => (
  <svg width="35" height="7" viewBox="0 0 35 7" version="1.1">
    <g fill="none">
      <g>
        <path
          d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z"
          transform="matrix(0 1 -1 0 35 0)"
          fill={fill}
        />
        <line
          y1="-0.5"
          x2="30"
          y2="-0.5"
          transform="translate(0 4)"
          stroke={fill}
        />
      </g>
    </g>
  </svg>
)
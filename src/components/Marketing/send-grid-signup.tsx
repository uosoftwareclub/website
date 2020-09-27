import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const SendGridSignUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!show && (
        <SignUpButton onClick={() => setShow(true)}>
          Sign up for Mailing List
        </SignUpButton>
      )}
      <SignUpContainer className={show ? 'show' : ''}>
        {show && (
          <HideButton onClick={() => setShow(false)}>
            {show ? 'Hide Form' : 'Sign up for Mailing List'}
          </HideButton>
        )}
        <iframe src="https://cdn.forms-content.sg-form.com/79c9e9ca-0054-11eb-9de0-c6d99ab7a58a" />
      </SignUpContainer>
    </>
  );
};

export default SendGridSignUp;

const SignUpButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 120px;
  left: 0;
  padding: 12px;
  background: #111;
  color: #fff;
  ${mediaqueries.desktop`
    display: none
  `}
`;

const HideButton = styled.button`
  position: absolute;
  right: -58px;
  padding: 12px;
  background: #111;
  color: #fff;
`;

const SignUpContainer = styled.div`
  position: fixed;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  z-index: 100;
  top: 100px;
  left: -650px;
  height: 500px;
  width: 650px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04),
    0 16px 32px rgba(0, 0, 0, 0.04), 0 32px 64px rgba(0, 0, 0, 0.04);
  transition: all ease-in-out 0.2s;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  &.show {
    left: 0;
  }
  ${mediaqueries.desktop`
    display: none
  `}
`;

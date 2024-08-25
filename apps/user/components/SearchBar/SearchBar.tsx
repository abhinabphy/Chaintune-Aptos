'use client'
import React from 'react';
import styled from 'styled-components';

// Create a Styled Input component with basic styling
const StyledInput = styled.input.attrs({ type: 'text' })`
  font-size: 2.797vw;
font-weight: 300;
line-height: 3.357vw;
letter-spacing: 0em;
  color: #FFF;
  background: transparent;
  border: none;
  border-radius: 3px;
  outline: none;
  &::placeholder {
    color: #ffffff56;
  }
  
`

// Component that uses the Styled Input
const TextInput = () => {
  return <StyledInput placeholder="Start Typing..." />;
};

export default TextInput;
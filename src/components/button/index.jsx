import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? '5px 9px' : '7px 15px')};
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? '13px' : '16px')};
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary};
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

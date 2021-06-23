import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import BeemaLogo from '../../assets/logo/logo_croped.png';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  align-items: 'center';
`;

const LogoImg = styled.img`
  width: 6em;
  height: 6em;
  ${({ inline }) =>
    inline &&
    css`
      width: 40px;
      height: 40px;
      margin-right: 10px;
      align-items: center;
    `}

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `}
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? '8px' : '5px')};
  font-size: ${({ inline, small }) =>
    inline ? '20px' : small ? '23px' : '30px'};
  color: ${({ inline }) => (inline ? '#fff' : theme.primary)};
  font-weight: 700;
  align-items: center;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline}>
      <LogoImg src={BeemaLogo} inline={inline} small={small} />
      <LogoText inline={inline} small={small}>
        Beema
      </LogoText>
    </LogoContainer>
  );
}

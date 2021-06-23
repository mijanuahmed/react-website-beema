import React from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import { Logo } from '../logo';
import { Marginer } from '../marginer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;
const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.4em;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 11px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #adadad;
  }

  &:not(:last-of-type) {
    margin-right: 11px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 7px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 11px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 7px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightReserved = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="4em" />
      <Logo small />
      <Marginer direction="vertical" margin="2em" />
      <MotivationalText>Just say the magical word</MotivationalText>
      <MotivationalText>and we will do the rest</MotivationalText>
      <Marginer direction="vertical" margin="3em" />
      <Button>Start Your Project</Button>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of Services</Link>
          <Link>Contact us</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </SocialIcon>

          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <Marginer direction="vertical" margin="3em" />
      <RightReserved>&copy; 2021 Beema All rights reserved </RightReserved>
    </FooterContainer>
  );
};

export default Footer;

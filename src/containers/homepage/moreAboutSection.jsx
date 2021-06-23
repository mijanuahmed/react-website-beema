import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { SectionTitle } from '../../components/sectionTitle';

import AboutImgUrl from '../../assets/illustrations/rocket_launch_.png';

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap-reverse;

  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 20px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
  margin-left: 3.5em;
  @media screen and (max-width: 480px) {
    margin-left: 0;
    
    justify-content: center;
`;

const AboutImg = styled.img`
  width: 430px;
  height: 400px;
  margin-left: 3.5em;
  @media screen and (max-width: 480px) {
    margin-left: 0;
    width: 300px;
    height: 290px;
  }
`;

const MoreAboutSection = () => {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About Beema</SectionTitle>
      <AboutContainer>
        <AboutText>
          Beema is about designing, building and delivering best quality
          software for your company.{<br />}
          {<br />} We make sure that you get the best software infrastructure
          and set of application to ensure the best experience of your clients.
          {<br />}
          {<br />} So whether you are handling thousands of payment transactions
          ot you're just starting out, you are in the right place.
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
};

export default MoreAboutSection;

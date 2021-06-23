import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import OurService from '../../components/ourService';
import { SectionTitle } from '../../components/sectionTitle';

import Service1Img from '../../assets/illustrations/web_development_.png';
import Service2Img from '../../assets/illustrations/mobile_phone.png';
import Service3Img from '../../assets/illustrations/bug_fixed.png';

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const ServicesSection = () => {
  return (
    <ServicesContainer name="ServicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="Fully Integrated Service"
        details="We build and deliver fully integrated web apps with customized control panels that fit your company needs"
        imageUrl={Service1Img}
      />
      <OurService
        title="Mobile optimized"
        details="We build and deliver fully integrated web apps with customized control panels that fit your company needs"
        imageUrl={Service2Img}
        isReversed
      />
      <OurService
        title="Quality is our top priority"
        details="We have teams of professional developers, designers and managers that ensures delivering the best software quality for your company"
        imageUrl={Service3Img}
      />
    </ServicesContainer>
  );
};

export default ServicesSection;

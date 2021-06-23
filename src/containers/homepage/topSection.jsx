import React from 'react';
import styled from 'styled-components';
import BackgroundIMG from '../../assets/pictures/company_team.jpg';
import { Logo } from '../../components/logo';
import { Marginer } from '../../components/marginer';
import { Button } from '../../components/button/index';
import { DownArrow } from '../../components/downArrow';
import Navbar from '../../components/Navbar';
import { Element, scroller } from 'react-scroll';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;

  background-image: url(${BackgroundIMG});
  background-attachment: fixed;
  background-size: 100%;
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.4em;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
`;

const TopSection = (props) => {
  const scrollToNextSection = () => {
    scroller.scrollTo('ServicesSection', {
      smooth: true,
      duration: 1500,
    });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        {' '}
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="6em" />
          <Logo />
          <Marginer direction="vertical" margin="2em" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the Best in the industry</MotivationalText>
          <Marginer direction="vertical" margin="2.5em" />
          <Button>Start Your Project</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>{' '}
      </TopContainer>
    </Element>
  );
};

export default TopSection;

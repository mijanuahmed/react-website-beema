import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/footer';
import { Marginer } from '../../components/marginer';
import MoreAboutSection from './moreAboutSection';
import ReviewsSection from './reviewsSection';
import ServicesSection from './servicesSection';
import TopSection from './topSection';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Homepage = () => {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="0.5em" />
      <ReviewsSection />
      <Marginer direction="vertical" margin="5em" />

      <MoreAboutSection />
      <Marginer direction="vertical" margin="9em" />
      <Footer />
    </PageContainer>
  );
};

export default Homepage;

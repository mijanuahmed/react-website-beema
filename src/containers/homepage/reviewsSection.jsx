import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import ReviewCard from '../../components/reviewCard';
import { SectionTitle } from '../../components/sectionTitle';
import { useMediaQuery } from 'react-responsive';
import 'pure-react-carousel/dist/react-carousel.es.css';
import User1Img from '../../assets/pictures/profile_picture_1.jpg';
import User2Img from '../../assets/pictures/profile_picture_2.jpg';
import User3Img from '../../assets/pictures/profile_picture_3.jpg';
import User4Img from '../../assets/pictures/profile_picture_4.jpeg';

const ReviewsContainer = styled(Element)`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 65%;
  padding: 20px 55px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    outline: none;
    border: none;
    background-color: #e4e4e4;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

const ReviewsSection = (props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <ReviewsContainer>
      <SectionTitle> What others saying about us</SectionTitle>
      <Marginer direction="vertical" margin="2em" />

      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 330 : 240}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" I am very much enjoyed working with Beema and team - they have an excellent grasp of their subject, and have created something great for us. "
              username="John Coner"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText=" I am very much enjoyed working with Beema and team - they have an excellent grasp of their subject, and have created something great for us. "
              username="John Coner"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText=" I am very much enjoyed working with Beema and team - they have an excellent grasp of their subject, and have created something great for us. "
              username="John Coner"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText=" I am very much enjoyed working with Beema and team - they have an excellent grasp of their subject, and have created something great for us. "
              username="John Coner"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
};

export default ReviewsSection;

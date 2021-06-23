import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer';

const CardContainer = styled.div`
  width: 280px;
  height: 380px;
  background-color: #fff;
  box-shadow: 1px 1px 7px rgba(17, 17, 17, 0.2);
  padding: 10px 1em;
  border-radius: 3px;
  margin: 3px 0;
  position: relative;
`;
const QuoteIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #d1d1d1;
  font-size: 37px;
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;

  display: flex;
  justify-content: center;
`;

const Line = styled.span`
  width: 100%;
  height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
`;

const ReviewCard = (props) => {
  const { reviewText, username, userImgUrl } = props;
  return (
    <CardContainer>
      <QuoteIcon>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </QuoteIcon>
      <Marginer direction="vertical" margin="5em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="4em" />
      <Line />
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username> {username} </Username>
      </UserDetails>
    </CardContainer>
  );
};

export default ReviewCard;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import LP from '../assets/images/LPilogue.svg';

// 회전 애니메이션 정의
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  width: 390px;
  margin: 0 auto;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;

const LoadingText = styled.span`
  width: 78px;
  height: 22px;
  margin: 120px 0px 0px 0px;
  font-size: 20px;
`;

const LoadingImage = styled.img`
  width: 340px;
  height: 312px;
  margin: 0 25px;
  animation: ${rotate} 10s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingText>추천 중..</LoadingText>
      <LoadingImage src={LP} />
    </LoadingContainer>
  );
};

export default Loading;

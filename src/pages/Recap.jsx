import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components';

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 40px 30px 30px 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const RecapCard = styled.div`
  background: #fbf7ec;
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  margin: 0;
`;

const CardSubtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const CardIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Recap = () => {
  return (
    <Container>
      <Title>Recap of {2025}</Title>

      <RecapCard>
        <CardContent>
          <CardTitle>가장 많이 느낀 감정</CardTitle>
          <CardSubtitle>울음 5회</CardSubtitle>
        </CardContent>
        <CardIcon>😭</CardIcon>
      </RecapCard>

      <RecapCard>
        <CardContent>
          <CardTitle>가장 많이 기록한 아티스트</CardTitle>
          <CardSubtitle>DAY6 5회</CardSubtitle>
        </CardContent>
        <CardIcon>
          <img
            src="https://via.placeholder.com/60x60/4285f4/ffffff?text=DAY6"
            alt="DAY6"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
        </CardIcon>
      </RecapCard>

      <RecapCard>
        <CardContent>
          <CardTitle>가장 많이 기록한 노래</CardTitle>
          <CardSubtitle>Zombie 6회</CardSubtitle>
        </CardContent>
        <CardIcon>
          <img
            src="https://via.placeholder.com/60x60/333333/ffffff?text=♪"
            alt="Zombie"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
        </CardIcon>
      </RecapCard>
    </Container>
  );
};

export default Recap;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ResultRequest from '../components/ResultRequest';
import ResultCocktail from '../components/ResultCocktail';
import home from '../assets/images/home.svg';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  width: 390px;
  flex-direction: column;
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  width: 390px;
  height: 500px;
  margin-top: 50px;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  transform: ${({ isTouched }) =>
    isTouched ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
`;

const CardFront = styled(CardFace)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBack = styled(CardFace)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

const HomeIcon = styled.img`
  margin: 20px;
  margin-left: auto;
  width: 30px;
  cursor: pointer;
`;

const Description = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Result = () => {
  const [isTouched, setIsTouched] = useState(false);
  const navigation = useNavigate();

  const handleTouch = () => {
    setIsTouched(!isTouched);
  };

  return (
    <Container>
      <Content>
        <HomeIcon src={home} alt="home" onClick={() => navigation('/')} />
        <Card onClick={handleTouch} isTouched={isTouched}>
          <CardFront>
            <ResultRequest />
          </CardFront>

          <CardBack>
            <ResultCocktail />
          </CardBack>
        </Card>
        <Description>화면을 터치해보세요!</Description>
      </Content>
    </Container>
  );
};

export default Result;

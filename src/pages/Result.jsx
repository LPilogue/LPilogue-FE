import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ResultRequest from '../components/ResultRequest';
import ResultCocktail from '../components/ResultCocktail';
import home from '../assets/images/home.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeIcon = styled.img`
  margin-left: auto;
  margin-right: 10px;
  margin-top: 10px;
  width: 31px;
  cursor: pointer;
`;

const Description = styled.div`
  text-align: center;
`;

const Result = () => {
  const [isTouched, setIsTouched] = useState(false);
  const navigation = useNavigate();

  const handleTouch = () => {
    setIsTouched(!isTouched);
  };

  return (
    <Container onClick={handleTouch}>
      <HomeIcon src={home} alt="home" onClick={() => navigation('/')} />
      {!isTouched ? <ResultRequest /> : <ResultCocktail />}
      <Description>화면을 터치해보세요!</Description>
    </Container>
  );
};

export default Result;

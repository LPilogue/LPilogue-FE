import styled from 'styled-components';
import requestPaper from '../assets/images/requestPaper.svg';
import recommend from '../mockData/recommend';
import logo from '../assets/images/LPilogue_logo.svg';

// 부모 컨테이너: 이미지와 글자가 겹치도록 설정
const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 80px auto;
  font-family: 'Freesentation';
`;

// 이미지: 배경처럼 깔리게 설정
const BGimage = styled.img`
  width: 100%;
  display: block;
  z-index: 0;
`;

// 글자: 이미지 위에 올림
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const CocktailImg = styled.img`
  width: 197px;
`;

const Name = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Logo = styled.img``;

const ResultCocktail = () => {
  return (
    <Container>
      <BGimage src={requestPaper} alt="background" />
      <Content>
        <Title>오늘의 추천 칵테일이에요</Title>
        <CocktailImg src={recommend.cocktail.filePath} alt="cocktail" />
        <Name>{recommend.cocktail.name}</Name>
        <Description>{recommend.cocktail.description}</Description>
        <Logo src={logo} alt="LPilogue_logo" />
      </Content>
    </Container>
  );
};

export default ResultCocktail;
